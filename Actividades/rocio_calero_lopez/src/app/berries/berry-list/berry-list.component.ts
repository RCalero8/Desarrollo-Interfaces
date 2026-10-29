import { Component, inject, OnInit, signal } from '@angular/core';
import { NamedResource } from '../../interfaces/pokeapi';
import { BerryService } from '../../services/berry-service';
import { BerryItemComponent } from '../berry-item/berry-item.component';

@Component({
  selector: 'app-berry-list',
  imports: [BerryItemComponent],
  templateUrl: './berry-list.component.html',
})
export class BerryListComponent implements OnInit {
  private service = inject(BerryService);

  readonly limit = 20;
  berries = signal<NamedResource[]>([]);
  offset = signal(0);
  count = signal(0);
  loading = signal(false);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.service.getBerries(this.limit, this.offset()).subscribe({
      next: (res) => {
        this.berries.set(res.results);
        this.count.set(res.count);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  next(): void {
    if (this.offset() + this.limit < this.count()) {
      this.offset.update((o) => o + this.limit);
      this.load();
    }
  }

  prev(): void {
    this.offset.update((o) => Math.max(0, o - this.limit));
    this.load();
  }
}
