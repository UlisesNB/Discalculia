import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _url: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
    console.log('Se conecta al service');
  }

  getUser() {
    return this.http.get(`${this._url}/UserProfile`);
  }

  /**
   * 
   * Comentado de momento hasta definir si los parametros enviados para el post seran mediante interfaces o individuales
   */
  // postResultados(contar: number, enumerar: number, comprension: number, logica: number, operaciones: number, estimacion: number) {
  //   return this.http.post(`${this._url}/UserProfile`)
  // }
  
  postResultados(contar: number) {
    return this.http.post(`${this._url}/Ejercitario`, contar)
  }

}
