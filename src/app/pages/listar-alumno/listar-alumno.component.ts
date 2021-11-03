import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.scss']
})
export class ListarAlumnoComponent implements OnInit {

  constructor( private testService: TestService) { }

  resultados: any;

  ngOnInit(): void {
    this.obtenerResultados()
  }

  obtenerResultados() {
    this.testService.getAlumnos()
    .subscribe((data) => {
      this.resultados = data;
      console.log('Resultados: ', this.resultados);
    });

  }

}
