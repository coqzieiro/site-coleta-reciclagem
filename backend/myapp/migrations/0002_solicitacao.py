# Generated by Django 5.1.4 on 2024-12-16 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Solicitacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idUsuarioSolicitador', models.IntegerField()),
                ('descricaoSolicitacao', models.TextField()),
                ('estadoSolicitacao', models.CharField(choices=[('pendente', 'Pendente'), ('em_andamento', 'Em Andamento'), ('concluida', 'Concluída')], default='pendente', max_length=20)),
                ('tipoProblema', models.CharField(blank=True, max_length=255, null=True)),
                ('envolve', models.CharField(blank=True, max_length=255, null=True)),
                ('processos', models.BooleanField(default=False)),
                ('urgencia', models.CharField(blank=True, max_length=255, null=True)),
                ('consultou', models.BooleanField(default=False)),
                ('disponibilidade', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
