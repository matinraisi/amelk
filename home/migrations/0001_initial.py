# Generated by Django 5.1.4 on 2025-01-06 10:22

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('request_type', models.CharField(choices=[('buy', 'خرید ملک'), ('rent', 'اجاره'), ('sell', 'فروش')], default='buy', max_length=10)),
                ('full_name', models.CharField(max_length=255)),
                ('location', models.TextField()),
                ('max_price', models.IntegerField()),
                ('min_price', models.IntegerField()),
                ('max_area', models.IntegerField()),
                ('min_area', models.IntegerField()),
                ('amenities', models.JSONField(default=dict)),
                ('bedrooms', models.IntegerField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requests', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SellRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sell_requests', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
