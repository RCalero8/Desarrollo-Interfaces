import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonDetail } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-detail',
  imports: [RouterLink],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(PokemonService);

  pokemon = signal<PokemonDetail | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getPokemon(id).subscribe((p) => this.pokemon.set(p));
  }

  image(p: PokemonDetail): string {
    return p.sprites.other?.['official-artwork'].front_default ?? p.sprites.front_default ?? '';
  }
}
