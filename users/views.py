from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import User
from .forms import RegistrationForm, ProfileUpdateForm

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

    if request.method == 'POST':
        form = ProfileUpdateForm(request.POST, instance=user)
        if form.is_valid():
            user = form.save(commit=False)
            user.profile_completed = True
            user.save()
            messages.success(request, "پروفایل با موفقیت به‌روزرسانی شد.")
            return redirect('HomeApp:home')
    else:
        form = ProfileUpdateForm(instance=user)

    return render(request, 'user/profile_update.html', {'form': form})




def index_dashboard(request):
    return render (request, 'user/dashbord/index_dashbord.html')

def user_profile(request):
    return render (request, 'user/dashbord/user_profile.html')

def reviews(request):
    return render (request, 'user/dashbord/reviews.html')

def myproperty(request):
    return render (request, 'user/dashbord/my-property.html')

def myfavorites(request):
    return render (request, 'user/dashbord/my-favorites.html')
def message(request):
    return render (request, 'user/dashbord/message.html')
def addproperty(request):
    return render (request, 'user/dashbord/add-property.html')