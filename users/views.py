from django.shortcuts import render, redirect ,get_object_or_404
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import User , UserType ,Property , Image
from .forms import RegistrationForm, ProfileUpdateForm ,PropertyForm 

def register_view(request):
    if request.method == 'POST':
        phone_number = request.POST.get('phone_number')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        # بررسی تطابق رمز عبور
        if password1 != password2:
            messages.error(request, "رمز عبور و تکرار آن مطابقت ندارند.")
            return redirect('authentication:register')  # نام URL اصلاح شد

        # بررسی وجود شماره موبایل
        if User.objects.filter(phone_number=phone_number).exists():
            messages.error(request, "این شماره موبایل قبلاً ثبت شده است.")
            return redirect('authentication:register')

        # بررسی وجود ایمیل
        if User.objects.filter(email=email).exists():
            messages.error(request, "این ایمیل قبلاً ثبت شده است.")
            return redirect('authentication:register')

        # ایجاد کاربر جدید
        user = User.objects.create(
            phone_number=phone_number,
            email=email,
            password=make_password(password1)
        )
        login(request, user)
        messages.success(request, "ثبت‌نام با موفقیت انجام شد.")
        return redirect('HomeApp:home')

    return render(request, 'user/register.html')

def login_view(request):
    if request.method == 'POST':
        phone_number = request.POST.get('phone_number')
        password = request.POST.get('password')

        # استفاده از authenticate برای تایید اعتبار کاربر
        user = authenticate(request, username=phone_number, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "با موفقیت وارد شدید.")
            return redirect('HomeApp:home')
        else:
            messages.error(request, "رمز عبور یا شماره موبایل اشتباه است.")

    return render(request, 'user/login.html')

def logout_view(request):
    logout(request)
    messages.info(request, "شما از سیستم خارج شدید.")
    return redirect('HomeApp:home')

@login_required
def profile_update_view(request):
    user = request.user
    if user.user_type == UserType.AGENT:
        return redirect('authentication:profile')  
    if request.method == 'POST':
        form = ProfileUpdateForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            user = form.save(commit=False)
            # بررسی نوع حساب کاربری
            if user.user_type == UserType.AGENCY and not user.profile_completed:
                user.profile_completed = True 
            elif user.user_type == UserType.AGENT and not user.profile_completed:
                user.profile_completed = True 
            user.save()
            messages.success(request, "پروفایل با موفقیت به‌روزرسانی شد.")
            return redirect('authentication:profile')
        
    else:
        form = ProfileUpdateForm(instance=user)
    return render(request, 'user/dashbord/profile_update.html', {'form': form})
@login_required
def index_dashboard(request):
    user = request.user  # کاربر جاری
    adsProperty = Property.objects.filter(user=user)  # فیلتر کردن آگهی‌ها بر اساس کاربر
    print(adsProperty)
    return render(request, 'user/dashbord/index_dashbord.html', {
        'user_type': user.user_type,  # نوع کاربر
        'adsProperty': adsProperty  # ارسال آگهی‌ها به قالب
    })
@login_required    
def user_profile(request):
    user_profile = request.user
    # print(user_profile)
    return render(request, 'user/dashbord/user_profile.html', {
        'user_profile': user_profile
    })
        
@login_required
def reviews(request):
    return render (request, 'user/dashbord/reviews.html')

    
    
    
@login_required
def myproperty(request):
    return render (request, 'user/dashbord/my-property.html')



@login_required
def myfavorites(request):
    return render (request, 'user/dashbord/my-favorites.html')



@login_required   
def message(request):
    return render (request, 'user/dashbord/message.html')


@login_required
def Add_property(request):
    if request.method == "POST":
        property_data = {
            'title': request.POST.get('title'),
            'property_type': request.POST.get('property_type'),
            'use_property': request.POST.get('useproperty'),
            'ad_type': request.POST.get('ad_type'),
            'price_min': request.POST.get('price_min'),
            'price_max': request.POST.get('price_max'),
            'deposit': request.POST.get('deposit'),
            'rent': request.POST.get('rent'),
            'city': request.POST.get('city'),
            'postalcode': request.POST.get('postalcode'),
            'location': request.POST.get('location'),
            'area': request.POST.get('area'),
            'num_bedrooms': request.POST.get('num_bedrooms'),
            'construction_year': request.POST.get('construction_year'),
            'description': request.POST.get('description'),
            'user': request.user
        }
        
        property_instance = Property.objects.create(**property_data)
        return redirect('authentication:add_images', property_id=property_instance.id)
    
    return render(request, 'user/dashbord/add-property.html')

def add_images(request, property_id):
    property_instance = get_object_or_404(Property, id=property_id)

    if request.method == "POST" and request.FILES.getlist('images'):
        for img in request.FILES.getlist('images'):
            image = Image.objects.create(image=img)
            property_instance.images.add(image)

        return redirect('authentication:index_dashboard')
    
    return render(request, 'user/dashbord/add_images.html', {'property': property_instance})