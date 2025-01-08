from django import forms
from .models import PropertyRequest , RentOutPropertyView

class PropertyRequestForm(forms.ModelForm):
    class Meta:
        model = PropertyRequest
        fields = ['name', 'request_type', 'location', 'min_price', 'max_price', 'min_area', 'max_area', 'features', 'bedrooms', 'description']


class RentOutPropertyForm(forms.ModelForm):
    class Meta:
        model = RentOutPropertyView
        fields = ['property_type', 'location', 'max_price', 'min_price', 'max_rent', 'min_rent', 'features', 'description',]
