import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosDetallesComponent } from './resultados-detalles.component';

describe('ResultadosDetallesComponent', () => {
  let component: ResultadosDetallesComponent;
  let fixture: ComponentFixture<ResultadosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
