import { Component, inject, signal } from '@angular/core';
import { VehicleService } from '../../service/vehicle-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Result } from '../../interface/vehicle-response';
import { VehicleModalComponent } from '../vehicle-modal-component/vehicle-modal-component';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-component',
  styleUrl: './vehicle-list-component.css',
  templateUrl: './vehicle-list-component.html',
})
export class VehicleListComponent {
  private service = inject(VehicleService);
  private modalService = inject(NgbModal);

  list = signal<Result[]>([]);

  ngOnInit(): void {
    this.service.getAllVehicle().subscribe((resp) => {
      this.list.set(resp.results);
    });
  }

  openVehicleModal(id: string) {
    this.service.getOneVehicle(id).subscribe((resp) => {
      const modalRef = this.modalService.open(VehicleModalComponent);
      modalRef.componentInstance.characterDetail = resp;
    });
  }
}
