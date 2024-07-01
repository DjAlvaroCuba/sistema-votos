from rest_framework import serializers
from .models import Voto , Firma

class VotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voto
        fields = '__all__'
class FirmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firma
        fields = ['id', 'nombre', 'apellido', 'voto', 'voto_relacionado']
        
class ConteoVotosPorEventoSerializer(serializers.Serializer):
    votos_favor = serializers.IntegerField()
    votos_contra = serializers.IntegerField()