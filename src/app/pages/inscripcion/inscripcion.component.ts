import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  imports: [FormsModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {
  formData = {
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    email: '',
  };

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    alert('¡Inscripción enviada correctamente!');
  }
}

