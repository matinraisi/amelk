from django.db import models
from django.contrib.auth import get_user_model


class ConsultationRequest(models.Model):
    AD_TYPES = [
        ('purchase', 'خرید'),
    ]

    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True, blank=True, verbose_name="کاربر")
    ad_type = models.CharField(choices=AD_TYPES, max_length=50, verbose_name="نوع درخواست")
    location = models.CharField(max_length=255, verbose_name="آدرس/شهر یا محله")
    area = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="متراژ")
    price = models.DecimalField(max_digits=12, decimal_places=2, verbose_name="قیمت")
    bedrooms = models.CharField(max_length=10, verbose_name="اتاق خواب")
    facilities = models.TextField(verbose_name="امکانات رفاهی", blank=True, null=True)
    message = models.TextField(verbose_name="پیام")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ارسال درخواست")

    def __str__(self):
        return f"{self.ad_type} - {self.location}"

    class Meta:
        verbose_name = "درخواست مشاوره"
        verbose_name_plural = "درخواست‌های مشاوره"
        
class SellRequest(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"درخواست از {self.user.username} - {self.created_at}"