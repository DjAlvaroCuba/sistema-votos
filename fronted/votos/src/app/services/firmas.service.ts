import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirmasService {
  API_URL:string = 'http://127.0.0.1:8000/firmas/';
  VOTOS_URL:string = 'http://127.0.0.1:8000/api/votos/';

  constructor(private httpClient: HttpClient) { }

  postFirmas(firmas: any): Observable<any> {
    return this.httpClient.post(this.API_URL, firmas);
  }

  getVotosRelacionados(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.VOTOS_URL);
  }
}
