# Generated by Django 5.1.4 on 2025-01-08 11:52

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_request_max_area_alter_request_max_price_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='RentOutProperty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('property_type', models.CharField(choices=[('villa', 'ویلا'), ('apartment', 'آپارتمان'), ('commercial', 'تجاری')], max_length=50)),
                ('location', models.TextField()),
                ('max_price', models.BigIntegerField()),
                ('min_price', models.BigIntegerField()),
                ('max_rent', models.BigIntegerField()),
                ('min_rent', models.BigIntegerField()),
                ('amenities', models.JSONField(default=dict)),
                ('description', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='RentOutProperty', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
