from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
# صفحه اصلی
def home(request):
    return render(request, 'home/home.html')

# ثبت درخواست
def Request_registration(request):
    if request.method == 'POST':
        # دریافت داده‌ها از فرم
        request_type = request.POST.get('request_type')
        full_name = request.POST.get('full_name')
        location = request.POST.get('location')
        max_price = request.POST.get('maxprice')
        min_price = request.POST.get('minprice')
        max_area = request.POST.get('max_metr')
        min_area = request.POST.get('min_metr')
        
        # دریافت امکانات
        amenities = {
            'pool': 'pool' in request.POST,
            'balcony': 'balcony' in request.POST,
            'closed_parking': 'closed_parking' in request.POST,
            'tennis_court': 'tennis_court' in request.POST,
            'parking': 'parking' in request.POST,
            'yard': 'yard' in request.POST,
            'suite': 'suite' in request.POST,
            'library': 'library' in request.POST,
            'alarm_system': 'alarm_system' in request.POST,
            'dishwasher': 'dishwasher' in request.POST,
            'parquet': 'parquet' in request.POST,
            'internet': 'internet' in request.POST,
        }
        
        # تعداد خواب
        bedrooms = int(request.POST.get('bedrooms', 1))  # پیش‌فرض یک خواب
        
        # ذخیره درخواست در مدل Request
        new_request = Request.objects.create(  # اینجا باید از Request استفاده شود
            request_type=request_type,
            full_name=full_name,
            location=location,
            max_price=max_price,
            min_price=min_price,
            max_area=max_area,
            min_area=min_area,
            amenities=amenities,
            bedrooms=bedrooms,
            user=request.user,  # فرض بر این است که کاربر وارد شده است
        )
        
        return redirect('HomeApp:home')  # انتقال به صفحه اصلی

    return render(request, "home/Request_registration.html")



def PropertiesList(request):
    return render(request, "home/properties-list.html")


@login_required
def create_sell_request(request):
    SellRequest.objects.create(user=request.user)
    return redirect('HomeApp:home')