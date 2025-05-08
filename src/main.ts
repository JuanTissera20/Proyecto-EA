import { bootstrapApplication } from '@angular/platform-browser';
import { withHashLocation } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes'; 
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, { 
   ... appConfig, providers: [provideHttpClient(), provideRouter(routes, withHashLocation()) , importProvidersFrom(FormsModule),]})
    .catch((err) => console.error(err));
    
    