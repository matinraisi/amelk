from django import forms
from .models import User, UserType , Property


class RegistrationForm(forms.ModelForm):
    password1 = forms.CharField(widget=forms.PasswordInput, label="رمز عبور")
    password2 = forms.CharField(widget=forms.PasswordInput, label="تایید رمز عبور")

    class Meta:
        model = User
        fields = ['phone_number', 'email']

    def clean(self):
        cleaned_data = super().clean()
        password1 = cleaned_data.get('password1')
        password2 = cleaned_data.get('password2')

        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("رمز عبور و تایید رمز عبور یکسان نیستند.")
        return cleaned_data

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user

class ProfileUpdateForm(forms.ModelForm):
    full_name = forms.CharField(required=True, label="نام و نام خانوادگی")
    agency_name = forms.CharField(required=True, label="نام بنگاه")
    whatsapp_number = forms.CharField(required=True, label="شماره واتساپ")
    specialization = forms.CharField(required=True, label="تخصص مشاور")
    activity_areas = forms.CharField(
        required=True, 
        label="محله‌های حوزه فعالیت", 
        widget=forms.Textarea(attrs={'rows': 3})
    )
    address = forms.CharField(
        required=True, 
        label="ادرس کامل", 
        widget=forms.Textarea(attrs={'rows': 2})
    )
    description = forms.CharField(
        required=True, 
        label="توضیحات", 
        widget=forms.Textarea(attrs={'rows': 3})
    )
    user_type = forms.ChoiceField(choices=UserType.choices, label="نوع حساب",widget=forms.Select(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = [
            'user_type', 'full_name', 'agency_name', 
            'whatsapp_number', 'specialization', 
            'activity_areas', 'address', 'description'
        ]

    def clean(self):
        cleaned_data = super().clean()
        user_type = cleaned_data.get('user_type')
        agency_name = cleaned_data.get('agency_name')

        # نام بنگاه الزامی است اگر کاربر بنگاه املاک انتخاب کرده باشد.
        if user_type == UserType.AGENCY and not agency_name:
            self.add_error('agency_name', "برای بنگاه املاک، نام بنگاه الزامی است.")
        return cleaned_data
    
    
    
class PropertyForm(forms.ModelForm):
    class Meta:
        model = Property
        fields = ['title', 'property_type', 'use_property', 'ad_type', 'price_min', 'price_max', 'deposit', 'rent', 'city', 'postalcode', 'location', 'area', 'num_bedrooms', 'construction_year', 'description']