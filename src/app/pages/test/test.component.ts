import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TestService } from '../../services/test.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { $ } from 'protractor';


@Component({
  selector: 'app-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class TestComponent implements OnInit {

  items = [
    {
      orden: 2,
      img: '/assets/dos-estrellas.jpg'
    },
    {
      orden: 5,
      img: '/assets/cinco-estrellas.jpg'
    },
    {
      orden: 4,
      img: '/assets/cuatro-estrellas.jpg'
    },
    {
      orden: 1,
      img: '/assets/una-estrella.jpg'
    },
    {
      orden: 3,
      img: '/assets/tres-estrellas.png'
    }
  ];



  contarFormGroup = new FormGroup ({
    respuestaSeleccionadaFrutas: new FormControl('', Validators.required),
    respuestaSeleccionadaArboles: new FormControl('', Validators.required),

    contar_3_1: new FormControl('', Validators.required),
    contar_3_2: new FormControl('', Validators.required),
    contar_3_3: new FormControl('', Validators.required),
    contar_3_4: new FormControl('', Validators.required),
  
    contar_7_1: new FormControl('', Validators.required),
    contar_7_2: new FormControl('', Validators.required),
    contar_7_3: new FormControl('', Validators.required),
    contar_7_4: new FormControl('', Validators.required),
  
    contarLimInfSup_5_1: new FormControl('', Validators.required),
    contarLimInfSup_5_2: new FormControl('', Validators.required),
    contarLimInfSup_5_3: new FormControl('', Validators.required),
    contarLimInfSup_5_4: new FormControl('', Validators.required),
    contarLimInfSup_5_5: new FormControl('', Validators.required),
  
    contarLimInfSup_4_1: new FormControl('', Validators.required),
    contarLimInfSup_4_2: new FormControl('', Validators.required),
    contarLimInfSup_4_3: new FormControl('', Validators.required),
    contarLimInfSup_4_4: new FormControl('', Validators.required),
    contarLimInfSup_4_5: new FormControl('', Validators.required),
  
    contarAtras_7_1: new FormControl('', Validators.required),
    contarAtras_7_2: new FormControl('', Validators.required),
    contarAtras_7_3: new FormControl('', Validators.required),
    contarAtras_7_4: new FormControl('', Validators.required),
    contarAtras_7_5: new FormControl('', Validators.required),
  
    contarAtras_15_1: new FormControl('', Validators.required),
    contarAtras_15_2: new FormControl('', Validators.required),
    contarAtras_15_3: new FormControl('', Validators.required),
    contarAtras_15_4: new FormControl('', Validators.required),
    contarAtras_15_5: new FormControl('', Validators.required),

  });

  enumerarFormGroup = new FormGroup({
    corazones:  new FormControl('', Validators.required), 
    ratones:  new FormControl('', Validators.required),
    dinosaurios:  new FormControl('', Validators.required),
    aviones:  new FormControl('', Validators.required),
    estrellas: new FormControl('', Validators.required),
  });

  correcta1 = false;
  correcta2 = false;
  correcta3 = false;
  correcta4 = false;
  correcta5 = false;

  incorrecta1 = false;
  incorrecta2 = false;
  incorrecta3 = false;

  sistNumFormGroup = new FormGroup({
    elegirMayor_2_10: new FormControl('', Validators.required),
    elegirMayor_2_6: new FormControl('', Validators.required),
    elegirMayor_4_5: new FormControl('', Validators.required),
    elegirMayor_8_7: new FormControl('', Validators.required),
    elegirMayor_9_3: new FormControl('', Validators.required),

    // sieteControl: new FormControl('', Validators.required),
    // domingoControl: new FormControl('', Validators.required),
    // onceControl: new FormControl('', Validators.required),
    // bicienControl: new FormControl('', Validators.required),
    // julioControl: new FormControl('', Validators.required),
    // cincoControl: new FormControl('', Validators.required),
    // setentaControl: new FormControl('', Validators.required),
    // sesienteControl: new FormControl('', Validators.required),
    // treintaControl: new FormControl('', Validators.required),
    // catorceControl: new FormControl('', Validators.required),
    // dinceControl: new FormControl('', Validators.required),
    // juevesControl: new FormControl('', Validators.required),


  });

    sieteControl = false; 
    domingoControl = false; 
    onceControl = false; 
    bicienControl = false; 
    julioControl = false; 
    cincoControl = false; 
    setentaControl = false; 
    sesienteControl = false; 
    treintaControl = false; 
    catorceControl = false; 
    dinceControl = false; 
    juevesControl = false; 

    operacionesLogicas = new FormGroup({
      controlPiezas: new FormControl('', Validators.required),
      controlCartaMenosOcho: new FormControl('', Validators.required),
      controlCartaMenosCuatro: new FormControl('', Validators.required),
      controlCartaMenosSiete: new FormControl('', Validators.required),

      controlRellenarCuatro: new FormControl('', Validators.required),
      controlRellenarMenosCuatro: new FormControl('', Validators.required),
      controlRellenarTres: new FormControl('', Validators.required),
      controlRellenarSiete: new FormControl('', Validators.required),
      controlRellenarDoce: new FormControl('', Validators.required),
      controlRellenarNueve: new FormControl('', Validators.required),
      controlRellenarResultCuatro: new FormControl('', Validators.required),
      controlRellenarVeinteYOcho: new FormControl('', Validators.required),

    });
    
    operaciones = new FormGroup({
      controlGlobos: new FormControl('', Validators.required),
      controlLapices: new FormControl('', Validators.required),
      controlConejos: new FormControl('', Validators.required),
      controlPelotas: new FormControl('', Validators.required),
      controlFlores: new FormControl('', Validators.required),
      controlSumasUno: new FormControl('', Validators.required),
      controlSumasDos: new FormControl('', Validators.required),
      controlSumasTres: new FormControl('', Validators.required),
      ControlSumasCuatro: new FormControl('', Validators.required),
      ControlSumasCinco: new FormControl('', Validators.required),
    });

    estimacion = new FormGroup({
      controlEjercicioUno: new FormControl('', Validators.required),
    });

    ocultarImagen: boolean = true;
    mostrarOpciones: boolean = false;


  respuestaSeleccionadaArboles: string;

  contarArray: number[]

  //Contadores
  contarTotal: number = 0;
  enumerarTotal: number = 0;
  sistNumericoTotal: number = 0;
  operLogicasTotal: number = 0;
  operacionesTotal: number = 0;
  estimTamanhoTotal: number = 0;

  arrayTest: any[] = [];

  objContar = {
    id_resultadoTest: null,
    id_area: 1,
    pObtenido: 0,
    indicador: null,
    observacion: null
  };

  objEnumerar = {
    id_resultadoTest: null,
    id_area: 2,
    pObtenido: 0,
    indicador: null,
    observacion: null
  };

  objSistNumerico = {
    id_resultadoTest: null,
    id_area: 3,
    pObtenido: 0,
    indicador: null,
    observacion: null
  };

  objOperLogicas = {
    id_resultadoTest: null,
    id_area: 4,
    pObtenido: 0,
    indicador: null,
    observacion: null
  };

  objOperaciones = {
    id_resultadoTest: null,
    id_area: 5,
    pObtenido: 0,
    indicador: null,
    observacion: null
  };

  objEstimTamanho = {
    id_resultadoTest: null,
    id_area: 6,
    pObtenido: 0,
    indicador: null,
    observacion: null
  };

  constructor(private testService: TestService, private _formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  analizarResultadosContar() {

    if (this.contarFormGroup.controls['respuestaSeleccionadaFrutas'].value == '9') {
      this.contarTotal ++;
    };

    if (this.contarFormGroup.controls['respuestaSeleccionadaArboles'].value == '9') {
      this.contarTotal ++;
    };

    if (this.contarFormGroup.controls['respuestaSeleccionadaFrutas'].value == '9') {
      this.contarTotal ++;
    };

    if (this.contarFormGroup.controls['contar_3_1'].value == 4 && this.contarFormGroup.controls['contar_3_2'].value == 5 
      && this.contarFormGroup.controls['contar_3_3'].value == 6 && this.contarFormGroup.controls['contar_3_4'].value == 7) {
      this.contarTotal ++;
    };

    if (this.contarFormGroup.controls['contar_7_1'].value == 8 && this.contarFormGroup.controls['contar_7_2'].value == 9 
      && this.contarFormGroup.controls['contar_7_3'].value == 10 && this.contarFormGroup.controls['contar_7_4'].value == 11) {
      this.contarTotal++;
    };

    if (this.contarFormGroup.controls['contarLimInfSup_5_1'].value == 5 && this.contarFormGroup.controls['contarLimInfSup_5_2'].value == 6
      && this.contarFormGroup.controls['contarLimInfSup_5_3'].value == 7 && this.contarFormGroup.controls['contarLimInfSup_5_4'].value == 8 
      && this.contarFormGroup.controls['contarLimInfSup_5_5'].value == 9) {
      this.contarTotal++;
    };

    if (this.contarFormGroup.controls['contarLimInfSup_4_1'].value == 4 && this.contarFormGroup.controls['contarLimInfSup_4_2'].value == 5
      && this.contarFormGroup.controls['contarLimInfSup_4_3'].value == 6 && this.contarFormGroup.controls['contarLimInfSup_4_4'].value == 7
      && this.contarFormGroup.controls['contarLimInfSup_4_5'].value == 8) {
      this.contarTotal++;
    };

    if (this.contarFormGroup.controls['contarAtras_7_1'].value == 7 && this.contarFormGroup.controls['contarAtras_7_2'].value == 6
      && this.contarFormGroup.controls['contarAtras_7_3'].value == 5 && this.contarFormGroup.controls['contarAtras_7_4'].value == 4
      && this.contarFormGroup.controls['contarAtras_7_5'].value == 3) {
      this.contarTotal++;
    };

    if (this.contarFormGroup.controls['contarAtras_15_1'].value == 15 && this.contarFormGroup.controls['contarAtras_15_2'].value == 14
      && this.contarFormGroup.controls['contarAtras_15_3'].value == 13 && this.contarFormGroup.controls['contarAtras_15_4'].value == 12
      && this.contarFormGroup.controls['contarAtras_15_5'].value == 11) {
      this.contarTotal++;
    };

    this.objContar.pObtenido = this.contarTotal;

    this.arrayTest.push(this.objContar)

  }

  analizarResultadosEnumerar() {

    if (this.enumerarFormGroup.controls['corazones'].value == 9) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['ratones'].value == 14) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['dinosaurios'].value == 6) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['aviones'].value == 9) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['estrellas'].value == 10) {
      this.enumerarTotal++;
    };

    this.objEnumerar.pObtenido = this.enumerarTotal;

    this.arrayTest.push(this.objEnumerar)
  }

  analizarResultadossitemasNumericos() {

    if (this.correcta1) {
      this.sistNumericoTotal++
    }

    if (this.correcta2) {
      this.sistNumericoTotal++
    }

    if (this.correcta3) {
      this.sistNumericoTotal++
    }

    if (this.correcta4) {
      this.sistNumericoTotal++
    }

    if (this.correcta5) {
      this.sistNumericoTotal++
    }

    if (!this.incorrecta1) {
      this.sistNumericoTotal++
    }

    if (!this.incorrecta2) {
      this.sistNumericoTotal++
    }

    if (!this.incorrecta3) {
      this.sistNumericoTotal++
    }

    if (this.sistNumFormGroup.controls['elegirMayor_2_10'].value == 10) {
      this.sistNumericoTotal++
    }

    if (this.sistNumFormGroup.controls['elegirMayor_2_6'].value == 6) {
      this.sistNumericoTotal++
    }

    if (this.sistNumFormGroup.controls['elegirMayor_4_5'].value == 5) {
      this.sistNumericoTotal++
    }

    if (this.sistNumFormGroup.controls['elegirMayor_8_7'].value == 8) {
      this.sistNumericoTotal++
    }

    if (this.sistNumFormGroup.controls['elegirMayor_9_3'].value == 9) {
      this.sistNumericoTotal++
    }

    if (this.sieteControl) {
      this.sistNumericoTotal++
    }

    if (!this.domingoControl) {
      this.sistNumericoTotal++
    }

    if (this.onceControl) {
      this.sistNumericoTotal++
    }

    if (!this.bicienControl) {
      this.sistNumericoTotal++
    }
    
    if (!this.julioControl) {
      this.sistNumericoTotal++
    }

    if (this.cincoControl) {
      this.sistNumericoTotal++
    }

    if (this.setentaControl) {
      this.sistNumericoTotal++
    }

    if (!this.sesienteControl) {
      this.sistNumericoTotal++
    }

    if (this.treintaControl) {
      this.sistNumericoTotal++
    }

    if (this.catorceControl) {
      this.sistNumericoTotal++
    }

    if (!this.dinceControl) {
      this.sistNumericoTotal++
    }

    if (!this.juevesControl) {
      this.sistNumericoTotal++
    }

    this.objSistNumerico.pObtenido = this.sistNumericoTotal;

    this.arrayTest.push(this.objSistNumerico)

  }

  analizarResultadosOperacionesLogicas() {

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      console.log('Array: ', item.orden);
      
    }

    if (this.items[0].orden == 1 && this.items[1].orden == 2 && this.items[2].orden == 3 && this.items[3].orden == 4 && this.items[4].orden == 5 ) {
      console.log('Entro?');
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlPiezas'].value == 6) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlCartaMenosOcho'].value == 0) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlCartaMenosCuatro'].value == 1) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlCartaMenosSiete'].value == 0) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarCuatro'].value == 4) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarMenosCuatro'].value == 4) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarTres'].value == 3) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarSiete'].value == 7) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarDoce'].value == 12) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarNueve'].value == 9) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarResultCuatro'].value == 4) {
      this.operLogicasTotal++;
    };

    if (this.operacionesLogicas.controls['controlRellenarVeinteYOcho'].value == 28) {
      this.operLogicasTotal++;
    };

    
    this.objOperLogicas.pObtenido = this.operLogicasTotal;

    this.arrayTest.push(this.objOperLogicas);

    console.log('Operaciones Logicas: ', this.operLogicasTotal);

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items[0].orden);

  }

  onStepChange(evt: StepperSelectionEvent): void {
    console.log('Id del step', evt.selectedIndex);
    if(evt.selectedIndex == 21) {
      this.hide();
    }
  }

  hide() {
    console.log('se llama');
    window.setTimeout(() => {
      this.ocultarImagen = false;
      this.mostrarOpciones = true;
      this.ngOnInit()
    }, 2000)
  }

  verResultado() {
    console.log('Resultado: ', this.contarFormGroup.controls['respuestaSeleccionadaFrutas'].value);
  }

}
