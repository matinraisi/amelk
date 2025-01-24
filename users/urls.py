from django.urls import path
from . import views

app_name = 'authentication'

urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('dashbord/', views.index_dashboard, name='index_dashboard'),
    path('profile/', views.user_profile, name='profile'),
    path('reviews/', views.reviews, name='reviews'),
    path('my-property/', views.myproperty, name='myproperty'),
    path('my-favorites/', views.myfavorites, name='myfavorites'),
    path('message/', views.message, name='message'),
    path('addproperty/', views.Add_property, name='addproperty'),
]
