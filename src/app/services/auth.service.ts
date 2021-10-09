import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient, private router: Router) { }

  signInUser(userForm: any) {
    console.log('Lo que recibira la API: ', userForm );
    const headers =  { 'content-type': 'application/json'}  
    return this.http.post(`${this.URL}loggin/`, userForm, {'headers': headers});
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  
}
