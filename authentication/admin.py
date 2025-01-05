# admin.py
from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('phone_number', 'email')  # نمایش شماره تلفن و ایمیل در پنل ادمین
    search_fields = ('phone_number', 'email')  # جستجو بر اساس شماره تلفن و ایمیل

# ثبت مدل User در پنل ادمین
admin.site.register(User, UserAdmin)
