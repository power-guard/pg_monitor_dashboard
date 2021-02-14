"""pg_monitor_demo_srv URL Configuration
"""
from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('poll', views.poll, name='poll'),
]
