import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VotosInterface } from '../interfaces/votos.interface';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  API_URL:string = 'http://127.0.0.1:8000/api/votos/'; 

  constructor( private httpClient: HttpClient) { }

  getVotos(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
  
  postVotos(votos_firma: VotosInterface): Observable<any>{
    return this.httpClient.post(this.API_URL ,votos_firma);
  }
  



}
