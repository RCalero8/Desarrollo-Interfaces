import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemDetail } from '../../interfaces/pokeapi';
import { ItemService } from '../../services/item-service';

@Component({
  selector: 'app-item-detail',
  imports: [RouterLink],
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(ItemService);

  item = signal<ItemDetail | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getItem(id).subscribe((i) => this.item.set(i));
  }

  effect(i: ItemDetail): string {
    const entry = i.effect_entries.find((e) => e.language.name === 'en');
    return entry?.effect ?? 'Sin descripción disponible.';
  }
}
