from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth import get_user_model
from django.utils import timezone
from django_resized import ResizedImageField

class CustomUserManager(BaseUserManager):
    def create_user(self, phone_number, email, password=None, **extra_fields):
        if not phone_number:
            raise ValueError("شماره تلفن باید وارد شود.")
        if not email:
            raise ValueError("ایمیل باید وارد شود.")
        email = self.normalize_email(email)
        user = self.model(phone_number=phone_number, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("کاربر مدیر باید `is_staff=True` باشد.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("کاربر مدیر باید `is_superuser=True` باشد.")

        return self.create_user(phone_number, email, password, **extra_fields)


class UserType(models.TextChoices):
    NORMAL = 'normal', 'کاربر عادی'
    AGENT = 'agent', 'مشاور املاک'
    AGENCY = 'agency', 'بنگاه املاک'


class User(AbstractBaseUser, PermissionsMixin):
    phone_number = models.CharField(max_length=11, unique=True, verbose_name="شماره تلفن")
    email = models.EmailField(unique=True, verbose_name="ایمیل")
    is_active = models.BooleanField(default=True, verbose_name="فعال")
    is_staff = models.BooleanField(default=False, verbose_name="کارمند")
    is_superuser = models.BooleanField(default=False, verbose_name="مدیر")
    user_type = models.CharField(
        max_length=10,
        choices=UserType.choices,
        default=UserType.NORMAL,
        verbose_name="نوع حساب"
    )
    
    # فیلدهای اضافی برای مشاور املاک
    full_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="نام و نام خانوادگی")
    agency_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="نام بنگاه")
    whatsapp_number = models.CharField(max_length=15, blank=True, null=True, verbose_name="شماره واتساپ")
    specialization = models.CharField(max_length=255, blank=True, null=True, verbose_name="تخصص مشاور")
    activity_areas = models.JSONField(blank=True, null=True, verbose_name="محله‌های حوزه فعالیت")  # ذخیره شهرها و محله‌ها به صورت JSON
    address = models.TextField(blank=True, null=True, verbose_name="آدرس کامل")
    description = models.TextField(blank=True, null=True, verbose_name="توضیحات")

    # فیلدهای عمومی
    avatar = models.ImageField(upload_to='avatars/', default='/images/logo/images.png', verbose_name="آواتار")

    profile_completed = models.BooleanField(default=False, verbose_name="پروفایل تکمیل شده")

    objects = CustomUserManager()

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return f"{self.phone_number} - {self.get_user_type_display()}"


class Property(models.Model):
    PROPERTY_TYPES = [
        ('apartment', 'آپارتمان'),
        ('villa', 'ویلا'),
        ('land', 'زمین'),
        ('house', 'خانه'),
    ]
    
    USE_PROPERTY = [
        ('administrative', 'اداری'),
        ('commercial', 'تجاری'),
        ('residential', 'مسکونی'),
    ]
    
    AD_TYPES = [
        ('purchase', 'خرید'),
        ('sale', 'فروش'),
        ('lease', 'رهن'),
        ('rent', 'اجاره'),
    ]

    STATUS_CHOICES = [
        ('draft', 'پیش نویس'),
        ('published', 'منتشر شده'),
        ('expired', 'منقضی شده'),
    ]

    title = models.CharField(max_length=200, verbose_name="عنوان آگهی")
    property_type = models.CharField(choices=PROPERTY_TYPES, max_length=50, verbose_name="نوع ملک")
    use_property = models.CharField(choices=USE_PROPERTY, max_length=50, verbose_name="کاربری ملک")
    ad_type = models.CharField(choices=AD_TYPES, max_length=50, verbose_name="نوع آگهی")
    price_min = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="قیمت حداقل")
    price_max = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="قیمت حداکثر")
    deposit = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="پول پیش")
    rent = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="اجاره ماهیانه")
    city = models.CharField(max_length=50, verbose_name="شهر")
    postalcode = models.CharField(max_length=10, verbose_name="کد پستی")
    location = models.CharField(max_length=255, verbose_name="آدرس کامل")
    area = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="متراژ")
    num_bedrooms = models.IntegerField(verbose_name="تعداد خواب")
    construction_year = models.CharField(max_length=10, verbose_name="تاریخ ساخت")
    description = models.TextField(verbose_name="توضیحات")
    images = models.ManyToManyField('Image', related_name='properties', blank=True, verbose_name="تصاویر")
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name="کاربر")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ایجاد")
    status = models.CharField(choices=STATUS_CHOICES, max_length=20, default='published', verbose_name="وضعیت آگهی")

    def __str__(self):
        return f"{self.title} - {self.property_type} - {self.ad_type}"

    class Meta:
        verbose_name = "آگهی ملک"
        verbose_name_plural = "آگهی‌های ملک"

class Image(models.Model):
    image = ResizedImageField(upload_to='property_images/', crop=['middle', 'center'] , size=[500,500],quality=75, verbose_name="تصویر")

    def __str__(self):
        return str(self.image)