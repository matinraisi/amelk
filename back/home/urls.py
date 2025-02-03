from django.urls import path
from . import views

app_name = "HomeApp"

urlpatterns = [
    path('',views.home,name='home'),
    path('EstateBuy/', views.EstateBuy , name='buy'),
    path('About/', views.About , name='About'),
    path('Contact/', views.Contact , name='Contact'),
    path('EstateAlquilar/', views.EstateAlquilar , name='EstateAlquilar'), #درخواست اجاره
    path('EstateSell/', views.EstateSell , name='EstateSell'),#درخواست فروش
    path('property/<int:property_id>/', views.HouseDetails, name='HouseDetails'),
    # برای اجاره دارم 
    path('LeaseTerms/', views.LeaseTerms , name='LeaseTerms'),
    # اجاره کنم
    path('Rent/', views.Rent , name='Rent'),
    # list of properties
    path('ListProperty/', views.ListProperty , name='ListProperty'),
    



]