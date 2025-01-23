from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
# صفحه اصلی
def home(request):
    return render(request, 'home/home.html')


def Add_property(request):
    return render(request , "home/Add_Property.html")

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
    filter_list = request.GET.get('Request_filter')
    
    if filter_list == 'rent':
        properties =  RentOutProperty.objects.all()
        print(properties)
    elif filter_list == 'sell':
        properties =  RentOutProperty.objects.all()
    else:
        properties =  RentOutProperty.objects.all()
        
    return render(request, "home/properties-list.html" , {properties:'properties'})


@login_required
def create_sell_request(request):
    SellRequest.objects.create(user=request.user)
    return redirect('HomeApp:home')


def RentOutPropertyView(request):
    if request.method == "POST":
        property_type = request.POST.get('property_type')
        location = request.POST.get('location')
        max_price = request.POST.get('max_price')
        min_price = request.POST.get('min_price')
        max_rent = request.POST.get('max_rent')
        min_rent = request.POST.get('min_rent')
        description = request.POST.get('description')
        
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
        nw_request = RentOutProperty.objects.create( 
            property_type= property_type,
            location=location,
            max_price=max_price,
            min_price=min_price,
            max_rent=max_rent,
            min_rent=min_rent,
            amenities=amenities,
            description=description,
            user=request.user, 
        )
        
        return redirect('HomeApp:home')  

        
    return render(request, "home/RentOutPropertyView.html")
def EstateBuy(request):
    return render(request, "home/EstateBuy.html")