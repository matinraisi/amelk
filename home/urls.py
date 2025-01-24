from django.urls import path
from . import views

app_name = "HomeApp"

urlpatterns = [
    path('',views.home,name='home'),
    path('EstateBuy/', views.EstateBuy , name='buy'),
    path('About/', views.About , name='About '),
    path('Contact/', views.Contact , name='Contact '),
    path('EstateAlquilar/', views.EstateAlquilar , name='EstateAlquilar '),
    path('EstateSell/', views.EstateSell , name='EstateSell '),


]