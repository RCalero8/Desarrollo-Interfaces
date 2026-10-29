import { Component, input} from '@angular/core';
import { Drink } from '../../interface/coctail-list-response';
@Component({
  imports: [],
  selector: 'app-coctail-item-componets',
  styleUrl: './coctail-item-componets.css',
  templateUrl: './coctail-item-componets.html',
})
export class CoctailItemComponets {
  drink = input.required<Drink>();
}
