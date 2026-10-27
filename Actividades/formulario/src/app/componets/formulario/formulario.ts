import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
   user = {
    nombre: '',
    apellidos: '',
    nif: '',
    email: '',
    telefono: '',
    sexo: '',
    comoConocio: '',
    password: '',
    confirmPassword: '',
    aceptaTerminos: false
  }

  onSubmit() {
    console.log(this.user);
  }
}
 