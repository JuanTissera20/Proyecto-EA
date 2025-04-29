import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { UnidadInfoComponent } from './pages/unidad-info/unidad-info.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: '', component:PrincipalComponent},
  { path: 'unidad', component: UnidadInfoComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirigir a unidad por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
