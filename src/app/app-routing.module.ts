import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se importan las rutas que seran necesarias para la navegacion
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
