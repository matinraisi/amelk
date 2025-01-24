from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth import get_user_model
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



class PropertyType(models.TextChoices):
    APARTMENT = 'apartment', 'آپارتمان'
    VILLA = 'villa', 'ویلا'
    LAND = 'land', 'زمین'
    HOUSE = 'house', 'خانه'

# نوع آگهی
class AdType(models.TextChoices):
    SALE = 'sale', 'فروش'
    RENT = 'rent', 'رهن و اجاره'
    PURCHASE = 'purchase', 'خرید'
    LEASE = 'lease', 'اجاره'

# مدل آگهی
class AdProperty(models.Model):
    title = models.CharField(max_length=255, verbose_name="عنوان آگهی")
    property_type = models.CharField(max_length=20, choices=PropertyType.choices, verbose_name="نوع ملک")
    ad_type = models.CharField(max_length=20, choices=AdType.choices, verbose_name="نوع آگهی")
    price_min = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="قیمت حداقل")
    price_max = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="قیمت حداکثر")
    deposit = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="پول پیش")
    rent = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True, verbose_name="اجاره ماهیانه")
    city = models.CharField(max_length=50, verbose_name="شهر")  # تغییر نام از 'citys' به 'city'
    postalcode = models.CharField(max_length=10, verbose_name="کد پستی")  # تغییر به CharField
    location = models.CharField(max_length=255, verbose_name="آدرس کامل")  # اصلاح املای "ادرس"
    images = models.ImageField(upload_to='ads/', null=True, blank=True, verbose_name="تصاویر آگهی")
    area = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="متراژ")
    num_bedrooms = models.IntegerField(verbose_name="تعداد خواب")
    construction_year = models.CharField(max_length=4, verbose_name="تاریخ ساخت")  # اصلاح نام فیلد
    description = models.TextField(verbose_name="توضیحات")
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, verbose_name="کاربر")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ایجاد")

    def __str__(self):
        return f"{self.title} - {self.property_type} - {self.ad_type}"

    class Meta:
        verbose_name = "آگهی"
        verbose_name_plural = "آگهی‌ها"