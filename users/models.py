from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models


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
    agency_name = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="نام بنگاه"
    )
    profile_completed = models.BooleanField(default=False, verbose_name="پروفایل تکمیل شده")

    objects = CustomUserManager()

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return f"{self.phone_number} - {self.get_user_type_display()}"
