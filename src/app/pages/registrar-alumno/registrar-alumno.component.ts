import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TestService } from '../../services/test.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.scss']
})
export class RegistrarAlumnoComponent implements OnInit {

  alumno = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    documento: new FormControl('', Validators.required),
  });

  matcher = new MyErrorStateMatcher();

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  registrarAlumno() {
    this.testService.postAlumno(this.alumno.value)
    .subscribe(
      res => {
        console.log('Respuesta del servidor: ', res);
        this.alumno.reset()
      },
      err => console.log(err)
    );
  };
}
