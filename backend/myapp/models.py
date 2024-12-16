from django.db import models
from django.contrib.auth.hashers import make_password

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

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith('pbkdf2_sha256'):
          self.password = make_password(self.password)
        super().save(*args, **kwargs)

class Cliente(Usuario):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith('pbkdf2_sha256'):
          self.password = make_password(self.password)
        super().save(*args, **kwargs)