import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-components',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-components.html',
  styleUrl: './navbar-components.css'
})
export class NavbarComponents {}