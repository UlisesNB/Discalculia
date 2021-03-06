import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Componentes
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './pages/test/test.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ResultadosDetallesComponent } from './pages/resultados-detalles/resultados-detalles.component';
import { RegistrarAlumnoComponent } from './pages/registrar-alumno/registrar-alumno.component';

// Angular Material importaciones
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Angular Material CDK 
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ObserversModule} from '@angular/cdk/observers';
import {CdkStepperModule} from '@angular/cdk/stepper';

import { AuthGuard } from './auth.guard';
import { ListarAlumnoComponent } from './pages/listar-alumno/listar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    NavbarComponent,
    ResultadosComponent,
    ResultadosDetallesComponent,
    RegistrarAlumnoComponent,
    ListarAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    MatCardModule,
    MatCheckboxModule,
    ObserversModule,
    CdkStepperModule
  ],

  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

