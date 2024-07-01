from .serializers import FirmaSerializer
from rest_framework import generics , status
from .models import Voto , Firma
from .serializers import VotoSerializer , ConteoVotosPorEventoSerializer
from rest_framework.response import Response
from rest_framework import views

class VotoListCreate(generics.ListCreateAPIView):
    queryset = Voto.objects.all() 
    serializer_class = VotoSerializer

class VotoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Voto.objects.all()
    serializer_class = VotoSerializer
    
class FirmaCreateAPIView(generics.CreateAPIView):
    queryset = Firma.objects.all()
    serializer_class = FirmaSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
class ConteoVotosPorEventoAPIView(generics.RetrieveAPIView):
    serializer_class = ConteoVotosPorEventoSerializer
    queryset = Voto.objects.all()

    def retrieve(self, request, *args, **kwargs):
        evento_id = self.kwargs.get('pk')  # Obtén el ID del evento desde la URL
        votos = Voto.objects.filter(id=evento_id).first()
        if not votos:
            return Response({'error': 'Evento no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        votos_favor = Firma.objects.filter(voto=True, voto_relacionado=votos).count()
        votos_contra = Firma.objects.filter(voto=False, voto_relacionado=votos).count()

        serializer = self.get_serializer(data={
            'votos_favor': votos_favor,
            'votos_contra': votos_contra
        })
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)