import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
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
  @ViewChild('AluForm') myNgForm: any;

  entidad = {} as FormGroup;

  alumno = {
    id_entidad: 0
  };

  aluProfe = {
    id_alumno: 0,
    id_profesor: 0  
  }
  matcher = new MyErrorStateMatcher();

  constructor(private testService: TestService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.crearFormulario();

  }

  crearFormulario() {
    this.entidad = this.fb.group({
      tipo_entidad: ['Al'],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      id_usuario: [],
      nro_documento: ['', Validators.required],
    });
  }

  registrarEntidad() {

    this.testService.postEntidad(this.entidad.value)
    .subscribe(
      res => {
        this.recuperarEntidad(this.entidad.controls['nro_documento'].value)

        this.myNgForm.resetForm()
        this.entidad.reset({
          tipo_entidad: 'Al'
        });
      },
      err => console.log(err)
    );
  };

  recuperarEntidad(doc: string) {
    this.testService.getEntidad(doc)
    .subscribe(
      res => {
        let respuesta: any;
        respuesta = JSON.parse(JSON.stringify(res))
        this.alumno.id_entidad = respuesta.id

        this.registrarAlumno(this.alumno)

      }
    )
  }

  registrarAlumno(alumno: {}) {
    this.testService.postAlumno(alumno)
    .subscribe(
      res => {
        let respuesta: any;
        let id: any;
        respuesta = JSON.parse(JSON.stringify(res));
        this.aluProfe.id_alumno = respuesta.id;

        id = localStorage.getItem('id_profesor');

        this.recuperarProfesor(id);
      }
    );
  };

  recuperarProfesor(id: number) {
    this.testService.getProfesor(id)
    .subscribe(
      res => {
        let respuesta: any;
        respuesta = JSON.parse(JSON.stringify(res));

        this.aluProfe.id_profesor = respuesta.id
        this.registarAlumnoProfesor();
      }
    );
  };

  registarAlumnoProfesor() {
    this.testService.postAluProfe(this.aluProfe)
    .subscribe(
      res => {}
    );
  }

}
