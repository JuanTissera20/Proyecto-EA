import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { error } from 'console';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-inscripcion',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {
  constructor(private apiService: ApiService) {}
  formData = {
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    email: '',
  };

async onSubmit() {
    console.log('Formulario enviado:', this.formData); // 🔹 Verifica si este mensaje aparece en la consola
   await lastValueFrom(this.apiService.createUser(this.formData));
  }
}

