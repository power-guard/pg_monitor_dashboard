from django.urls import path
from . import views

urlpatterns = [
    path('poll', views.poll, name='poll'),
]