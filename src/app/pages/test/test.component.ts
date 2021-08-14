import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  respuestaSeleccionadaFrutas: string;
  respuestaSeleccionadaArboles: string;

  contarArray: number[]

  contar_3_1:number
  contar_3_2:number
  contar_3_3:number
  contar_3_4:number

  contar_7_1:number
  contar_7_2:number
  contar_7_3:number
  contar_7_4:number

  contarLimInfSup_5_1:number
  contarLimInfSup_5_2:number
  contarLimInfSup_5_3:number
  contarLimInfSup_5_4:number
  contarLimInfSup_5_5:number

  contarLimInfSup_4_1:number
  contarLimInfSup_4_2:number
  contarLimInfSup_4_3:number
  contarLimInfSup_4_4:number
  contarLimInfSup_4_5:number

  contarAtras_7_1:number
  contarAtras_7_2:number
  contarAtras_7_3:number
  contarAtras_7_4:number
  contarAtras_7_5:number

  contarAtras_15_1:number
  contarAtras_15_2:number
  contarAtras_15_3:number
  contarAtras_15_4:number
  contarAtras_15_5:number

  //Contadores
  contar: number;
  enumerar: number;

  constructor(private testService: TestService) {
    this.analizarResultados();
  }

  analizarResultados() {

    if (this.respuestaSeleccionadaFrutas === '9') {
      this.contar ++;
    }

    if (this.respuestaSeleccionadaArboles === '9') {
      this.contar ++;
    }

    if (this.contar_3_1 === 4 && this.contar_3_2 === 5 && this.contar_3_3 === 6 && this.contar_3_4 === 7 ) {
      this.contar ++;
    }

  }


  ngOnInit(): void {

  }

}
