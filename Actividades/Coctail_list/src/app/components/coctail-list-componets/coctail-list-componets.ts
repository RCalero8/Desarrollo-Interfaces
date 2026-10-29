import { Component, inject, OnInit } from '@angular/core';
import { CoctailService } from '../../service/coctail.service';
import { Drink } from '../../interface/coctail-list-response';
import { CoctailItemComponets } from '../coctail-item-componets/coctail-item-componets';

@Component({
  imports: [CoctailItemComponets],
  selector: 'app-coctail-list-componets',
  styleUrl: './coctail-list-componets.css',
  templateUrl: './coctail-list-componets.html',
})
export class CoctailListComponets implements OnInit {
  coctailService = inject(CoctailService);
  coctailList: Drink[] = [];

  ngOnInit(): void {
    this.coctailService.getAll().subscribe(resp => {
      this.coctailList = resp.drinks ?? [];
    });
  }
}