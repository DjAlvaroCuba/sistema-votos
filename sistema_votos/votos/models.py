from django.db import models

class Voto(models.Model):
    evento = models.CharField(max_length=100)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    organizacion = models.CharField(max_length=100)
    encargado = models.CharField(max_length=100)
    firmas = models.IntegerField(default=0)
    fecha_finalizacion = models.DateField(blank=True, null=True)
    def __str__(self):
        return self.nombre
class Firma(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    voto = models.BooleanField()  # True para favor (1), False para en contra (0)
    voto_relacionado = models.ForeignKey(Voto, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.nombre} {self.apellido} - {"A favor" if self.voto else "En contra"}'