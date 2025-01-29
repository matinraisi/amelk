from django.contrib.auth.decorators import login_required

def user_info(request):
    if request.user.is_authenticated:
        return {
            "user_fullname": request.user.phone_number  ,
            "user_email": request.user.email,
            "user_avatar": request.user.profile.avatar.url if hasattr(request.user, 'profile') and request.user.profile.avatar else None,
        }
    return {}
