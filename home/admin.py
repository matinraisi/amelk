from django.contrib import admin
from .models import Request

# ثبت مدل Request در پنل ادمین
@admin.register(Request)
class RequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'request_type', 'full_name', 'location', 'max_price', 'min_price', 'bedrooms',)
    search_fields = ('full_name', 'location', 'request_type')
    list_filter = ('request_type',)
