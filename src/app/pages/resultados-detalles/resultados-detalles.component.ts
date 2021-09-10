import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-resultados-detalles',
  templateUrl: './resultados-detalles.component.html',
  styleUrls: ['./resultados-detalles.component.scss']
})
export class ResultadosDetallesComponent implements OnInit {

  id: any;
  alumno_detalle: any;
   
  constructor(private activatedRoute: ActivatedRoute, private testService: TestService) {
    //Recuperamos el ID del objeto seleccionado para realizar la recuperacion de los datos correspondientes
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID: ', this.id);
  }

  ngOnInit(): void {
    /**
     * Una vez obtendido el ID recuperamos los datos y lo almacenamos en una variable para su uso
     */
    this.testService.getUserId(this.id).subscribe((data) => {
      this.alumno_detalle = data;
      console.log('Resultado del ID: ', this.id, 'es: ', data);
    });
  }

}
