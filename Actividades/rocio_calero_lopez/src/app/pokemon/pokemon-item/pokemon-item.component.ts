import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NamedResource } from '../../interfaces/pokeapi';
import { getIdFromUrl, SPRITES_URL } from '../../interfaces/utils';

@Component({
  selector: 'app-pokemon-item',
  imports: [RouterLink],
  templateUrl: './pokemon-item.component.html',
})
export class PokemonItemComponent {
  pokemon = input.required<NamedResource>();

  id = computed(() => getIdFromUrl(this.pokemon().url));
  image = computed(() => `${SPRITES_URL}/pokemon/other/official-artwork/${this.id()}.png`);
}
