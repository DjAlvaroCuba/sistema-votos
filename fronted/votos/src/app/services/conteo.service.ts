import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConteoVotos } from '../interfaces/conteo';

@Injectable({
  providedIn: 'root'
})
export class ConteoService {
  private baseUrl = 'http://192.168.1.53:8000/';

  constructor(private http: HttpClient) { }
  getConteoVotos(eventoId: number): Observable<ConteoVotos> {
    return this.http.get<ConteoVotos>(`${this.baseUrl}evento/${eventoId}/conteo-votos/`);
  }
}
