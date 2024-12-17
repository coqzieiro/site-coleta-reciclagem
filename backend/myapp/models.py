from django.db import models

class Usuario(models.Model):
    idUsuario = models.AutoField(primary_key=True)
    nomeUsuario = models.CharField(max_length=255)
    descricaoUsuario = models.TextField(blank=True, null=True)
    nota = models.FloatField(null=True, blank=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.nomeUsuario

class Advogado(Usuario):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    practice_license_number = models.CharField(max_length=50, blank=True, null=True)
    formacao = models.CharField(max_length=255, blank=True, null=True)

class Cliente(Usuario):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    fichaCriminal = models.TextField(blank=True, null=True)  # Added fichaCriminal field


class Solicitacao(models.Model):
    STATUS_CHOICES = [
        ('pendente', 'Pendente'),
        ('em_andamento', 'Em Andamento'),
        ('concluida', 'Concluída'),
    ]
    idUsuarioSolicitador = models.IntegerField()
    descricaoSolicitacao = models.TextField()
    estadoSolicitacao = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendente')
    tipoProblema = models.CharField(max_length=255, blank=True, null=True)
    envolve = models.CharField(max_length=255, blank=True, null=True)
    urgencia = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Solicitação #{self.pk}"