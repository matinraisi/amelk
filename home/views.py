from django.shortcuts import render, redirect ,get_object_or_404
from .models import *
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import ConsultationRequestForm , SellRequestForm
from users.models import Property
# صفحه اصلی
def home(request):
    properties = Property.objects.all()
    context = {
         'properties': properties,
    }
    return render(request, 'home/home.html',context)

def EstateBuy(request):
    buy_properties = Property.objects.filter(ad_type='PURCHASE')
    print(buy_properties)
    if request.method == 'POST':
        form = ConsultationRequestForm(request.POST)
        if form.is_valid():
            consultation_request = form.save(commit=False)
            if request.user.is_authenticated:
                consultation_request.user = request.user
                consultation_request.save()
                messages.success(request, "درخواست شما با موفقیت ثبت شد.")
            return redirect('HomeApp:buy')
        else:
            messages.error(request, "لطفاً فرم را به درستی تکمیل کنید.")
    else:
        form = ConsultationRequestForm()
    return render(request, "home/EstateBuy.html" ,{
        'form': form,
        'buy_properties': buy_properties,
        })
# برای درخواست اجاره
def EstateAlquilar(request):
    return render(request, "home/EstateAlquilar.html")
# فروش یک خانه
def EstateSell(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            sell_request = SellRequest(user=request.user)
            sell_request.save()
            messages.success(request, "درخواست فروش ملک شما با موفقیت ثبت شد.")
            return redirect('HomeApp:EstateSell')  
        else:
            messages.error(request, "لطفاً ابتدا وارد حساب کاربری خود شوید.")
            return redirect('authentication:login') 
    return render(request, "home/EstateSell.html")

# برای رهن
def LeaseTerms(request):
    return render(request, "home/LeaseTerms.html")

# برای اجاره
def Rent(request):
    return render(request, "home/Rent.html")
 
# جزییات خونه
def HouseDetails(request,property_id):
    property = get_object_or_404(Property, id=property_id)
    return render(request, "home/HouseDetails.html",{'property': property})
# list of properties
def ListProperty(request):
    # property = get_object_or_404(Property, id=property_id)
    return render(request, "home/ListProperty.html")


def About(request):
    return render(request, "home/About.html")

def Contact(request):
    return render(request, "home/Contact.html")

