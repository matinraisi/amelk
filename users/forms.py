from django import forms
from .models import User, UserType


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
    agency_name = forms.CharField(required=False, label="نام بنگاه")
    user_type = forms.ChoiceField(choices=UserType.choices, label="نوع حساب")

    class Meta:
        model = User
        fields = ['user_type', 'agency_name']

    def clean(self):
        cleaned_data = super().clean()
        user_type = cleaned_data.get('user_type')
        agency_name = cleaned_data.get('agency_name')

        if user_type == UserType.AGENCY and not agency_name:
            raise forms.ValidationError("برای بنگاه املاک، نام بنگاه الزامی است.")
        return cleaned_data
