import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';


//Se importan las rutas que seran necesarias para la navegacion
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ResultadosDetallesComponent } from './pages/resultados-detalles/resultados-detalles.component';
import { RegistrarAlumnoComponent } from './pages/registrar-alumno/registrar-alumno.component';
import { LoginComponent } from './auth/login/login.component';
import { ListarAlumnoComponent } from './pages/listar-alumno/listar-alumno.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'resultados', component: ResultadosComponent, canActivate: [AuthGuard]},
  {path: 'detalles/:id', component: ResultadosDetallesComponent},
  {path: 'registrar-alumno', component: RegistrarAlumnoComponent, canActivate: [AuthGuard]},
  {path: 'listaAlumnos', component: ListarAlumnoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
