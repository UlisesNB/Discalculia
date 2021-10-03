import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se importan las rutas que seran necesarias para la navegacion
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ResultadosDetallesComponent } from './pages/resultados-detalles/resultados-detalles.component';
import { RegistrarAlumnoComponent } from './pages/registrar-alumno/registrar-alumno.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'detalles/:id', component: ResultadosDetallesComponent},
  {path: 'registrar-alumno', component: RegistrarAlumnoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
