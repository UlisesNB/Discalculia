import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    loggin: '',
    password: ''
  };

  response: any;

  userForm = new FormGroup({
    loggin: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  })

  //   loggin = new FormControl('', [
  //   Validators.required,
  // ]);
  // password = new FormControl('', [
  //   Validators.required,
  // ]);

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  // passwordFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // signIn() {
  //   this.authService.signInUser(this.user)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         console.log('Que imprime???', this.user);
  //         this.router.navigate(['/test']);
  //       },
  //       err => console.log(err)
  //     )
  // }

  signIn(): void {
    this.authService.signInUser(this.userForm.value)
      .subscribe(
        res  => {
          console.log('Respuesta del servidor: ', res);

          this.response = JSON.parse(JSON.stringify(res));

          console.log('Objeto', this.response);

          localStorage.setItem('token', this.response.access_token);
          localStorage.setItem('id_profesor', this.response.user.id);


          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
  }

  // signIn() {
  //   this.authService.signInUser(this.loggin, this.password)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         console.log('Que imprime???', this.loggin, this.password);
  //         this.router.navigate(['/test']);
  //       },
  //       err => console.log(err)
  //     )
  // }

}
