from django import forms
from .models import PropertyRequest

class PropertyRequestForm(forms.ModelForm):
    class Meta:
        model = PropertyRequest
        fields = ['name', 'request_type', 'location', 'min_price', 'max_price', 'min_area', 'max_area', 'features', 'bedrooms', 'description']
