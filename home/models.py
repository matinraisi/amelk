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
    max_price = models.IntegerField(    )
    min_price = models.IntegerField(    )
    max_area = models.IntegerField( )
    min_area = models.IntegerField( )
    amenities = models.JSONField(default=dict)
    bedrooms = models.IntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='requests')

    def __str__(self):
        return f"{self.full_name} - {self.request_type}"
