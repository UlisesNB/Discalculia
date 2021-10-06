import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  signInUser(userForm: any) {
    console.log('Lo que recibira la API: ', userForm );
    return this.http.post(`${this.URL}loggin/`, userForm);
  }

  // signInUser(loggin: any, password: any) {
  //   console.log('Lo que recibira la API: ', loggin, password);
  //   return this.http.post(`${this.URL}loggin/`, loggin, password);
  // }
}
