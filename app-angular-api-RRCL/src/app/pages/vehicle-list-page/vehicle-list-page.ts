import { Component } from '@angular/core';
import { VehicleListComponent } from '../../component/vehicle-list-component/vehicle-list-component';

@Component({
  imports: [VehicleListComponent],
  selector: 'app-vehicle-list-page',
  styleUrl: './vehicle-list-page.css',
  templateUrl: './vehicle-list-page.html',
})
export class VehicleListPage {}
