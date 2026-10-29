import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NamedResource } from '../../interfaces/pokeapi';
import { getIdFromUrl, SPRITES_URL } from '../../interfaces/utils';

@Component({
  selector: 'app-item-item',
  imports: [RouterLink],
  templateUrl: './item-item.component.html',
})
export class ItemItemComponent {
  item = input.required<NamedResource>();

  id = computed(() => getIdFromUrl(this.item().url));
  image = computed(() => `${SPRITES_URL}/items/${this.item().name}.png`);
}
