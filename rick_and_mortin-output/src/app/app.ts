import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponents } from './components/navbar-components/navbar-components'; // Ajusta la ruta a tu archivo

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponents // <-- Añádelo aquí
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}