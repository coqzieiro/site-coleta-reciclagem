from django.urls import path
from . import views

urlpatterns = [
     path('api/data', views.my_api_endpoint, name='my_api_endpoint'),
     path('api/register', views.register_user, name='register_user'),
     path('api/login', views.login_user, name='login_user'),
     path('api/check_email', views.check_email, name='check_email'),
     path('api/solicitacao', views.create_solicitacao, name='create_solicitacao'),
]