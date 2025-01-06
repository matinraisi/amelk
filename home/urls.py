from django.urls import path
from . import views

app_name = "HomeApp"

urlpatterns = [
    path('',views.home,name='home'),
    path('Request_registration/',views.Request_registration,name='Request_registration'),
    path('properties-list/',views.PropertiesList,name='PropertiesList'),


]