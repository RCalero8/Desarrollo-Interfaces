import { Component, input, output } from '@angular/core';
import { Character } from '../../interface/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-componet',
  styleUrl: './character-item-componet.css',
  templateUrl: './character-item-componet.html',
})
export class CharacterItemComponet {
  character = input<Character>();

  characterClicked = output<string>();
  id: string = '';

  getCharacterId() {
  this.id = this.character()?.url.split("/")[5]!;
  return this.id;
  }

  emitCharacterClicked(){
    const id = this.getCharacterId();
    this.characterClicked.emit(id);
  }
}
