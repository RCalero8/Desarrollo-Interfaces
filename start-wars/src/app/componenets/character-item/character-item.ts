import { Component, input, output } from '@angular/core';
import { Result } from '../../interface/character-response';

@Component({
  imports: [],
  selector: 'app-character-item',
  styleUrl: './character-item.css',
  templateUrl: './character-item.html',
})
export class CharacterItem {
  character = input<Result>();
  characterClicked = output<string>();

  getCharacterId(): string {
    const url = this.character()?.url ?? '';
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  emitCharacterClicked() {
    this.characterClicked.emit(this.getCharacterId());
  }
}
