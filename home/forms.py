from django import forms
from .models import ConsultationRequest , SellRequest , RentRequest

class ConsultationRequestForm(forms.ModelForm):
    class Meta:
        model = ConsultationRequest
        fields = ['ad_type', 'location', 'area', 'price', 'bedrooms', 'facilities', 'message']
        widgets = {
            'ad_type': forms.Select(attrs={'class': 'form-control'}),
            'location': forms.TextInput(attrs={'class': 'form-control'}),
            'area': forms.NumberInput(attrs={'class': 'form-control'}),
            'price': forms.NumberInput(attrs={'class': 'form-control'}),
            'bedrooms': forms.Select(choices=[
                ('1', '1'),
                ('2', '2'),
                ('3', '3'),
                ('+3', '+3')
            ], attrs={'class': 'form-control'}),
            'facilities': forms.TextInput(attrs={'class': 'form-control'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
        }
        
class SellRequestForm(forms.ModelForm):
    class Meta:
        model = SellRequest
        fields = [] 
        
class RentRequestForm(forms.ModelForm):
    class Meta:
        model = RentRequest
        fields = ['ad_type', 'location', 'area', 'rent_price', 'bedrooms', 'facilities', 'message']
        widgets = {
            'ad_type': forms.Select(attrs={'class': 'form-control'}),
            'location': forms.TextInput(attrs={'class': 'form-control'}),
            'area': forms.NumberInput(attrs={'class': 'form-control'}),
            'rent_price': forms.NumberInput(attrs={'class': 'form-control'}),
            'bedrooms': forms.Select(choices=[
                ('1', '1'),
                ('2', '2'),
                ('3', '3'),
                ('+3', '+3')
            ], attrs={'class': 'form-control'}),
            'facilities': forms.TextInput(attrs={'class': 'form-control'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
        }
