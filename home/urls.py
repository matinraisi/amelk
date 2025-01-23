from django.urls import path
from . import views

app_name = "HomeApp"

urlpatterns = [
    path('',views.home,name='home'),
    path('Request_registration/',views.Request_registration,name='Request_registration'),
    path('properties-list/',views.PropertiesList,name='PropertiesList'), #tic
    path('create-sell-request/', views.create_sell_request, name='create_sell_request'),
    path('RentOutProperty/', views.RentOutPropertyView, name='RentOutProperty'),
    path('Add-property/', views.Add_property , name='Addproperty '),#tic
    path('EstateBuy/', views.EstateBuy , name='buy '),

]