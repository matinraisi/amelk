from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
# صفحه اصلی
def home(request):
    return render(request, 'home/home.html')


def EstateBuy(request):
    return render(request, "home/EstateBuy.html")
def About(request):
    return render(request, "home/About.html")

def Contact(request):
    return render(request, "home/Contact.html")

def EstateAlquilar(request):
    return render(request, "home/EstateAlquilar.html")

def EstateSell(request):
    return render(request, "home/EstateSell.html")
