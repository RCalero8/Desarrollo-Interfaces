import { Component, inject } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { Result } from '../../interface/vehicle-response';
@Component({
  imports: [],
  selector: 'app-vehicle-modal-component',
  styleUrl: './vehicle-modal-component.css',
  templateUrl: './vehicle-modal-component.html',
})
export class VehicleModalComponent {
  activeModal = inject(NgbActiveModal);
  vehicleDetail?: Result;
}
