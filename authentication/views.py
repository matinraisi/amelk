# views.py
from django.shortcuts import render, redirect
from .forms import RegistrationForm
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import User

from django.shortcuts import render, redirect
from .forms import RegistrationForm
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import User

def register_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()  # ثبت نام کاربر
            login(request, user)  # ورود خودکار کاربر پس از ثبت‌نام
            messages.success(request, "ثبت‌نام با موفقیت انجام شد.")
            return redirect('HomeApp:home')  # به صفحه‌ای که می‌خواهید هدایت کنید
    else:
        form = RegistrationForm()

    return render(request, 'parent/base.html', {'form': form})
def login_view(request):
    if request.method == 'POST':
        phone_number = request.POST['phone_number']
        password = request.POST['password']

        try:
            user = User.objects.get(phone_number=phone_number)
        except User.DoesNotExist:
            messages.error(request, "کاربری با این شماره تلفن یافت نشد.")
            return redirect('HomeApp:home')  # مسیر مورد نظر برای هدایت به صفحه اصلی

        # اعتبارسنجی رمز عبور
        user = authenticate(request, username=user.username, password=password)
        if user is not None:
            login(request, user)  # ورود موفق
            messages.success(request, "به سیستم خوش آمدید.")
            return redirect('HomeApp:home')  # به صفحه‌ای که می‌خواهید هدایت کنید
        else:
            messages.error(request, "رمز عبور نادرست است.")
            return redirect('HomeApp:home')  # مسیر مورد نظر برای هدایت به صفحه اصلی

    return render(request, 'HomeApp:home')  # اگر متد 
from django.contrib.auth import logout
from django.shortcuts import redirect

def logout_view(request):
    logout(request)  # خروج از سیستم
    return redirect('HomeApp:home')  # مسیر پس از خروج، می‌توانید آن را به صفحه‌ای که می‌خواهید تغییر دهید