from django import forms
from .models import User

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
