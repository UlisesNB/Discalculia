import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TestService } from '../../services/test.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // respuestaSeleccionadaFrutas: FormGroup;
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

    if (this.contar_3_1 === 4 && this.contar_3_2 === 5 && this.contar_3_3 === 6 && this.contar_3_4 === 7 ) {
      this.contar ++;
    }

  }


  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.firstFormGroup = this._formBuilder.group({
      respuestaSeleccionadaFrutas: ['', Validators.required],

    });
    console.log('imprimir el valor de ejercicio 1', this.firstFormGroup.value);
  }

  

}
