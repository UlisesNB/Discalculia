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
      title: '2',
      img: '/assets/dos-estrellas.jpg'
    },
    {
      title: '5',
      img: '/assets/cinco-estrellas.jpg'
    },
    {
      title: '4',
      img: '/assets/cuatro-estrellas.jpg'
    },
    {
      title: '1',
      img: '/assets/una-estrella.jpg'
    },
    {
      title: '3',
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
      controllRellenarMenosCuatro: new FormControl('', Validators.required),
      controllRellenarTres: new FormControl('', Validators.required),
      controllRellenarSiete: new FormControl('', Validators.required),
      controllRellenarDoce: new FormControl('', Validators.required),
      controllRellenarNueve: new FormControl('', Validators.required),
      controllRellenarResultCuatro: new FormControl('', Validators.required),
      controllRellenarVenteYOcho: new FormControl('', Validators.required),

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
  }


  

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

    console.log('Total contar: ', this.contarTotal);
    this.objContar.pObtenido = this.contarTotal;

    this.arrayTest.push(this.objContar)
    console.log('Resultado: ', this.arrayTest);

  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items[0].title);

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
