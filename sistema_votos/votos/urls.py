from django.urls import path
from .views import VotoListCreate ,FirmaCreateAPIView ,ConteoVotosPorEventoAPIView , VotoRetrieveUpdateDestroy

urlpatterns = [
    path('api/votos/', VotoListCreate.as_view(), name='voto-list-create'),
    path('firmas/', FirmaCreateAPIView.as_view(), name='crear-firma'),
    path('evento/<int:pk>/conteo-votos/', ConteoVotosPorEventoAPIView.as_view(), name='conteo_votos_evento'),
    path('api/votos/<int:pk>/', VotoRetrieveUpdateDestroy.as_view(), name='voto-detail'),
]
