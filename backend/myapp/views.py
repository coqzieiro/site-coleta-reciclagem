from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Advogado, Cliente, Solicitacao
import json
from django.contrib.auth.hashers import check_password, make_password

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
                try:
                  user = Advogado.objects.get(email=email)
                  if user and check_password(password, user.password):
                     pass
                  else:
                      user = None
                except Advogado.DoesNotExist:
                   user = None
                if not user:
                  try:
                    user = Cliente.objects.get(email=email)
                    if user and check_password(password, user.password):
                        pass
                    else:
                        user = None
                  except Cliente.DoesNotExist:
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
            hashed_password = make_password(password)
            if user_type == 'advogado':
                if Advogado.objects.filter(email=email).exists():
                   return JsonResponse({'error': 'Email já cadastrado'}, status=400)
                user = Advogado.objects.create(
                    nomeUsuario = full_name,
                    email=email,
                    password=hashed_password,
                    practice_license_number=practice_license_number,
                    )
            elif user_type == 'cliente':
                if Cliente.objects.filter(email=email).exists():
                   return JsonResponse({'error': 'Email já cadastrado'}, status=400)
                user = Cliente.objects.create(
                    nomeUsuario = full_name,
                    email=email,
                    password=hashed_password,
                    phone_number = phone_number,
                    )
            else:
                return JsonResponse({'error': 'Invalid user type'}, status=400)

            return JsonResponse({'message': 'User registered successfully!', 'user_id': user.idUsuario}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def check_email(request):
    if request.method == 'GET':
       email = request.GET.get('email')
       if email:
           if Advogado.objects.filter(email=email).exists() or Cliente.objects.filter(email=email).exists():
               return JsonResponse({'exists': True}, status=200)
           else:
               return JsonResponse({'exists': False}, status=200)
       else:
           return JsonResponse({'error': 'Please provide an email'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def create_solicitacao(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_id = data.get('user_id')
            descricao = data.get('descricao')
            tipoProblema = data.get('tipoProblema')
            envolve = data.get('envolve')
            processos = data.get('processos')
            urgencia = data.get('urgencia')
            consultou = data.get('consultou')
            disponibilidade = data.get('disponibilidade')

            solicitacao = Solicitacao.objects.create(
                idUsuarioSolicitador=user_id,
                descricaoSolicitacao=descricao,
                tipoProblema=tipoProblema,
                envolve=envolve,
                processos=processos,
                urgencia=urgencia,
                consultou=consultou,
                disponibilidade=disponibilidade,
            )
            return JsonResponse({'message': 'Solicitação enviada com sucesso!', 'solicitacao_id': solicitacao.id}, status=201)
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