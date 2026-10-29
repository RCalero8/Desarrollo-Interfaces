import { Component, inject, OnInit, signal } from '@angular/core';
import { NamedResource } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonItemComponent],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  private service = inject(PokemonService);

  readonly limit = 20;
  pokemons = signal<NamedResource[]>([]);
  offset = signal(0);
  count = signal(0);
  loading = signal(false);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.service.getPokemons(this.limit, this.offset()).subscribe({
      next: (res) => {
        this.pokemons.set(res.results);
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
