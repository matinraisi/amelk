from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password
from .forms import RegistrationForm
from .models import User

def register_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.password = make_password(form.cleaned_data['password1'])  # هش کردن رمز عبور
            user.save()
            login(request, user)
            messages.success(request, "ثبت‌نام با موفقیت انجام شد.")
            return redirect('HomeApp:home')
    else:
        form = RegistrationForm()
    return render(request, 'parent/base.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        phone_number = request.POST['phone_number']
        password = request.POST['password']

        try:
            user = User.objects.get(phone_number=phone_number)
            if check_password(password, user.password):  # بررسی رمز عبور هش‌شده
                login(request, user)
                messages.success(request, "به سیستم خوش آمدید.")
                return redirect('HomeApp:home')
            else:
                messages.error(request, "رمز عبور نادرست است.")
        except User.DoesNotExist:
            messages.error(request, "کاربری با این شماره تلفن یافت نشد.")
        return redirect('authentication:login_view')

    return render(request, 'parent/base.html')

def logout_view(request):
    logout(request)
    messages.info(request, "شما از سیستم خارج شدید.")
    return redirect('HomeApp:home')
