import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  resultados: any;
  resultadosItems: [] = [];

  constructor(private testService: TestService) { 

    this.obtenerResultados();
  
  }

  obtenerResultados() {
    this.testService.getResultadoTest()
    .subscribe((data) => {
      this.resultados = data;
      console.log('Resultados: ', this.resultados);
      // for (let i = 0; i < this.resultados.length; i++) {
      //   const resultado = this.resultados[i];
      //   console.log('Resultados: ', resultado);
      //   if (resultado) {
          
      //   }
  
      // }
    });

  }

  ngOnInit(): void {
  }

}
