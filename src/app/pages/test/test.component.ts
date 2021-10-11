import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TestService } from '../../services/test.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import {
  CdkDragDrop,
  moveItemInArray,
  CdkDrag,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class TestComponent implements OnInit {

  items = ['Cero', 'Uno', 'Tres', 'Dos', 'Cinco'];  

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



  sistNumFormGroup = new FormArray([])

  respuestaSeleccionadaArboles: string;

  contarArray: number[]

  //Contadores
  contar: number;
  enumerar: number;

  constructor(private testService: TestService, private _formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.analizarResultados();
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  // onTaskDrop(event: CdkDragDrop<Task[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

  analizarResultados() {

    // if (this.respuestaSeleccionadaFrutas) {
    //   this.contar ++;
    // }

    if (this.respuestaSeleccionadaArboles === '9') {
      this.contar ++;
    }


  }


  ngOnInit(): void {

  }


  verResultado() {
    console.log('Resultado: ', this.contarFormGroup.controls['respuestaSeleccionadaFrutas'].value);
  }


  
  // console.log('Valor: ', this.firstFormGroup);

}
