from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Advogado, Cliente
import json
from django.contrib.auth.hashers import check_password

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            user = None
            # Try authenticating with each user type:
            try:
                user = Advogado.objects.get(email=email)
                if user and check_password(password, user.password):
                    pass
                else:
                    user = None
                if not user:
                  user = Cliente.objects.get(email=email)
                  if user and check_password(password, user.password):
                      pass
                  else:
                    user = None
            except Exception as e:
               return JsonResponse({'error': str(e)}, status=400)
            if user:
               return JsonResponse({'message': 'Logged in successfully!', 'user_id': user.idUsuario, 'user_type': user.__class__.__name__ }, status=200)
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=401)

        except Exception as e:
           return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    
@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_type = data.get('userType')
            full_name = data.get('full_name')
            email = data.get('email')
            password = data.get('password')
            practice_license_number = data.get('practice_license_number', None)
            phone_number = data.get('phone_number', None)

            if user_type == 'advogado':
              user = Advogado.objects.create(
                  nomeUsuario = full_name,
                  email=email,
                  password=password,
                  practice_license_number=practice_license_number,
                )
            elif user_type == 'cliente':
                user = Cliente.objects.create(
                  nomeUsuario = full_name,
                  email=email,
                  password=password,
                  phone_number = phone_number,
                )
            else:
                return JsonResponse({'error': 'Invalid user type'}, status=400)

            return JsonResponse({'message': 'User registered successfully!', 'user_id': user.idUsuario}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def my_api_endpoint(request):
    # Your view logic here
    data = {
       "message": "Data from Django API!",
        "items": ["item1", "item2", "item3"],
    }
    return JsonResponse(data)