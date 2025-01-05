# models.py
from django.db import models

class User(models.Model):
    phone_number = models.CharField(max_length=11, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.phone_number
