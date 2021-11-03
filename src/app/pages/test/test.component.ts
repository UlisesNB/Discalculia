import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { TestService } from '../../services/test.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class TestComponent implements OnInit {

  isLinear = false;
  mostrarStep: boolean = true;

  variable: boolean = false;

  mostrarAlumno: boolean = true;

  documento: string = '';

  alumnoJson: any;

  items = [
    {
      orden: 2,
      img: '/assets/007.png'
    },
    {
      orden: 5,
      img: '/assets/5 estrellas.gif'
    },
    {
      orden: 4,
      img: '/assets/009.png'
    },
    {
      orden: 1,
      img: '/assets/Little Star Animation.gif'
    },
    {
      orden: 3,
      img: '/assets/3 estrellas.gif'
    }
  ];

  alumnoFormGroup = new FormGroup({
    documentoControl: new FormControl('', Validators.required),
  })

  contarFormGroup = new FormGroup({
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
    corazones: new FormControl('', Validators.required),
    ratones: new FormControl('', Validators.required),
    dinosaurios: new FormControl('', Validators.required),
    aviones: new FormControl('', Validators.required),
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
    controlSumasCuatro: new FormControl('', Validators.required),
    controlSumasCinco: new FormControl('', Validators.required),
  });

  estimacion = new FormGroup({
    controlEjercicioUno: new FormControl('', Validators.required),
    controlEjercicioDos: new FormControl('', Validators.required),
    controlEjercicioTres: new FormControl('', Validators.required),
    controlEjercicioCuatro: new FormControl('', Validators.required),
    controlEjercicioCinco: new FormControl('', Validators.required),
    controlEjercicioSeis: new FormControl('', Validators.required),

  });

  ocultarImagenUno: boolean = true;
  mostrarOpcionesUno: boolean = false;

  ocultarImagenDos: boolean = true;
  mostrarOpcionesDos: boolean = false;

  ocultarImagenTres: boolean = true;
  mostrarOpcionesTres: boolean = false;

  ocultarImagenCuatro: boolean = true;
  mostrarOpcionesCuatro: boolean = false;

  ocultarImagenCinco: boolean = true;
  mostrarOpcionesCinco: boolean = false;

  ocultarImagenSeis: boolean = true;
  mostrarOpcionesSeis: boolean = false;

  //Contadores
  contarTotal: number = 0;
  enumerarTotal: number = 0;
  sistNumericoTotal: number = 0;
  operLogicasTotal: number = 0;
  operacionesTotal: number = 0;
  estimTamanhoTotal: number = 0;

  arrayTest: any[] = [];

  resultadoTest = {
    id: null,
    id_alumno: 0,
    id_profesor: 0,
    indicador: null,
    observacion: null
  };

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

  constructor(private testService: TestService, private _formBuilder: FormBuilder, private cdr: ChangeDetectorRef, private detector: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void { }

  analizarResultadosContar() {

    if (this.contarFormGroup.controls['respuestaSeleccionadaFrutas'].value == '9') {
      this.contarTotal++;
    };

    if (this.contarFormGroup.controls['respuestaSeleccionadaArboles'].value == '6') {
      this.contarTotal++;
    };

    if (this.contarFormGroup.controls['contar_3_1'].value == 4 && this.contarFormGroup.controls['contar_3_2'].value == 5
      && this.contarFormGroup.controls['contar_3_3'].value == 6 && this.contarFormGroup.controls['contar_3_4'].value == 7) {
      this.contarTotal++;
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

    this.objContar.id_resultadoTest = this.resultadoTest.id

    this.arrayTest.push(this.objContar)

  }

  analizarResultadosEnumerar() {

    if (this.enumerarFormGroup.controls['corazones'].value == 5) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['ratones'].value == 14) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['dinosaurios'].value == 11) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['aviones'].value == 9) {
      this.enumerarTotal++;
    };

    if (this.enumerarFormGroup.controls['estrellas'].value == 10) {
      this.enumerarTotal++;
    };

    this.objEnumerar.pObtenido = this.enumerarTotal;

    this.objEnumerar.id_resultadoTest = this.resultadoTest.id

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

    if (this.sistNumFormGroup.controls['elegirMayor_2_10'].value == 2) {
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

    this.objSistNumerico.id_resultadoTest = this.resultadoTest.id

    this.arrayTest.push(this.objSistNumerico);

  };

  analizarResultadosOperacionesLogicas() {

    if (this.items[0].orden == 1 && this.items[1].orden == 2 && this.items[2].orden == 3 && this.items[3].orden == 4 && this.items[4].orden == 5) {
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

    this.objOperLogicas.id_resultadoTest = this.resultadoTest.id

    this.arrayTest.push(this.objOperLogicas);

  };

  analizarResultadosOperaciones() {

    if (this.operaciones.controls['controlGlobos'].value == 5) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlLapices'].value == 6) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlConejos'].value == 8) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlPelotas'].value == 9) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlFlores'].value == 6) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlSumasUno'].value == 4) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlSumasDos'].value == 8) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlSumasTres'].value == 9) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlSumasCuatro'].value == 3) {
      this.operacionesTotal++
    };

    if (this.operaciones.controls['controlSumasCinco'].value == 8) {
      this.operacionesTotal++
    };

    this.objOperaciones.pObtenido = this.operacionesTotal;

    this.objOperaciones.id_resultadoTest = this.resultadoTest.id

    this.arrayTest.push(this.objOperaciones);

  };

  analizarResultadosEstimTamanho() {
    if (this.estimacion.controls['controlEjercicioUno'].value == 4) {
      this.estimTamanhoTotal++;
    };

    if (this.estimacion.controls['controlEjercicioDos'].value == 6) {
      this.estimTamanhoTotal++;
    };

    if (this.estimacion.controls['controlEjercicioTres'].value == 5) {
      this.estimTamanhoTotal++;
    };

    if (this.estimacion.controls['controlEjercicioCuatro'].value == 4) {
      this.estimTamanhoTotal++;
    };

    if (this.estimacion.controls['controlEjercicioCinco'].value == 5) {
      this.estimTamanhoTotal++;
    };

    if (this.estimacion.controls['controlEjercicioSeis'].value == 2) {
      this.estimTamanhoTotal++;
    };

    this.objEstimTamanho.pObtenido = this.estimTamanhoTotal;

    this.objEstimTamanho.id_resultadoTest = this.resultadoTest.id

    this.arrayTest.push(this.objEstimTamanho);

  };

  async buscarAlumno(documento: string) {
    await this.testService.getAlumnoProfesor(documento)
      .subscribe(
        res => {
          this.alumnoJson = JSON.parse(JSON.stringify(res))
          this.isLinear = false;
          this.hideForm();

          this.resultadoTest.id_alumno = this.alumnoJson.id_alumno.id;
          this.resultadoTest.id_profesor = this.alumnoJson.id_profesor.id;

          console.log('Resultado TEST', this.resultadoTest);
          this.guardarResultadoTest(this.resultadoTest);

        },
        err => console.log(err)
      );

  };

  guardarResultadoTest(resultadoTest: any) {
    this.testService.postResultadoTest(resultadoTest)
      .subscribe(
        res => {
          console.log('Respuesta del servidor: ', res);
          let respuesta: any;
          respuesta = JSON.parse(JSON.stringify(res))

          this.resultadoTest = respuesta;

          console.log('Nuevo resultadoTest: ', this.resultadoTest);
        },
        err => console.log(err)
      );
  };

  hideForm() {
    console.log('se llama');
    window.setTimeout(() => {
      this.mostrarAlumno = false;
      this.detector.detectChanges();
    }, 0)
  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);

  };

  onStepChange(evt: StepperSelectionEvent) {
    console.log('Id del step', evt.selectedIndex);

    if (evt.selectedIndex == 21) {
      setTimeout(() => {
        this.ocultarImagenUno = false;
        this.mostrarOpcionesUno = true;
        this.detector.detectChanges();
      }, 8000);
    };

    if (evt.selectedIndex == 22) {
      setTimeout(() => {
        this.ocultarImagenDos = false;
        this.mostrarOpcionesDos = true;
        this.detector.detectChanges();
      }, 8000);
    };

    if (evt.selectedIndex == 23) {
      window.setTimeout(() => {
        this.ocultarImagenTres = false;
        this.mostrarOpcionesTres = true;
        this.detector.detectChanges();
      }, 8000);    
    };

    if (evt.selectedIndex == 24) {
      window.setTimeout(() => {
        this.ocultarImagenCuatro = false;
        this.mostrarOpcionesCuatro = true;
        this.detector.detectChanges();

      }, 8000);
    };

    if (evt.selectedIndex == 25) {
      window.setTimeout(() => {
        this.ocultarImagenCinco = false;
        this.mostrarOpcionesCinco = true;
        this.detector.detectChanges();
      }, 8000);
    };

    if (evt.selectedIndex == 26) {
      window.setTimeout(() => {
        this.ocultarImagenSeis = false;
        this.mostrarOpcionesSeis = true;
        this.detector.detectChanges();
      }, 8000);
    };

  };

  calcularResultados() {
    this.analizarResultadosContar();
    this.analizarResultadosEnumerar();
    this.analizarResultadossitemasNumericos();
    this.analizarResultadosOperacionesLogicas();
    this.analizarResultadosOperaciones();
    this.analizarResultadosEstimTamanho();

    this.testService.postResultadoItem(this.arrayTest)
    .subscribe(
      res => {
        console.log('Se envió correctamente el item: ', res);
      },
      err => console.log(err)
    );
    this.aplicarDiagnosticoGeneral(this.resultadoTest, this.resultadoTest.id_alumno);
    this.resetForm();
  };

  resetForm() {
    this.contarFormGroup.reset();
    this.enumerarFormGroup.reset()
    this.sistNumFormGroup.reset();
    this.operacionesLogicas.reset()    
    this.operaciones.reset();
    this.estimacion.reset()

    this.contarTotal = 0;
    this.enumerarTotal = 0;
    this.sistNumericoTotal = 0;
    this.operLogicasTotal = 0;
    this.operacionesTotal = 0;
    this.estimTamanhoTotal = 0;

    this.isLinear = true;

    this.router.navigate(['/test']);


  };

  aplicarDiagnosticoGeneral(resultadoTest: any, idAlumno: number) {
    this.testService.putResultadoTest(resultadoTest, idAlumno)
      .subscribe(
        res => {
          console.log('Se aplicó el diagnostico: ', res);
        },
        err => console.log(err)
      );
  };
}
