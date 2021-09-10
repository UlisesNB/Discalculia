import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _url: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {
    console.log('Se conecta al service');
  }

  getUser() {
    return this.http.get(`${this._url}UserProfile/`);
  }

  getUserId(id: number) {
    return this.http.get(`${this._url}UserProfile/${id}`);
  }




}
