import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { UnidadInfoComponent } from './pages/unidad-info/unidad-info.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};

export const appRoutes: Routes = [
  { path: 'unidad-info', component: UnidadInfoComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: '', redirectTo: 'unidad-info', pathMatch: 'full' }
];