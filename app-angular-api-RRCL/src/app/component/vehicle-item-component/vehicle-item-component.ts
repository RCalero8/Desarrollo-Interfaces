import { Component, inject, input, output} from '@angular/core';
import { Result } from '../../interface/vehicle-response';

@Component({
  imports: [],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {
  vehicle= input<Result>();

  vehicleClicked = output<string>();

  getVehicleId(): string {
    const url = this.vehicle()?.url ?? '';
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  emitVehicleClicked() {
    this.vehicleClicked.emit(this.getVehicleId());
  }
}
