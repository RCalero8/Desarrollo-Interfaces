import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NamedResource } from '../../interfaces/pokeapi';
import { getIdFromUrl, SPRITES_URL } from '../../interfaces/utils';

@Component({
  selector: 'app-berry-item',
  imports: [RouterLink],
  templateUrl: './berry-item.component.html',
})
export class BerryItemComponent {
  berry = input.required<NamedResource>();

  id = computed(() => getIdFromUrl(this.berry().url));
  image = computed(() => `${SPRITES_URL}/items/${this.berry().name}-berry.png`);
}
