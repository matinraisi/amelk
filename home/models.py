from django.db import models
from django.conf import settings
from django.utils import timezone
class Request(models.Model):
    REQUEST_TYPES = [
        ('buy', 'خرید ملک'),
        ('rent', 'اجاره'),
        ('sell', 'فروش'),
    ]

    request_type = models.CharField(max_length=10, choices=REQUEST_TYPES, default='buy')
    full_name = models.CharField(max_length=255)
    location = models.TextField()
    max_price = models.BigIntegerField()
    min_price = models.BigIntegerField()
    max_area = models.BigIntegerField()
    min_area = models.BigIntegerField()
    amenities = models.JSONField(default=dict)
    bedrooms = models.IntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='requests')
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.full_name} - {self.request_type}"


class SellRequest(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sell_requests')

    def __str__(self):
        return f"{self.user.phone_number} - درخواست"


class RentOutProperty(models.Model):
    PROPERTY_TYPE_CHOICES = [
        ('villa', 'ویلا'),
        ('apartment', 'آپارتمان'),
        ('commercial', 'تجاری'),
    
    ]
    property_type = models.CharField(max_length=50, choices= PROPERTY_TYPE_CHOICES )
    location = models.TextField()
    max_price = models.BigIntegerField()
    min_price = models.BigIntegerField()
    max_rent = models.BigIntegerField()
    min_rent = models.BigIntegerField()
    amenities = models.JSONField(default=dict)
    description = models.TextField(blank=True, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='RentOutProperty')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.property_type} - {self.location}"