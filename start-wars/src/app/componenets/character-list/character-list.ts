import { Component, inject, signal } from '@angular/core';
import { CharacterItem } from '../character-item/character-item';
import { Character } from '../../service/character';
import { Result} from '../../interface/character-response'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModal } from '../character-modal/character-modal';
@Component({
  imports: [CharacterItem],
  selector: 'app-character-list',
  styleUrl: './character-list.css',
  templateUrl: './character-list.html',
})
export class CharacterList {
  private service = inject(Character);
  private modalService = inject(NgbModal);

  list = signal<Result[]>([]);

  ngOnInit(): void {
    this.service.getAllCharacter().subscribe((resp) => {
      this.list.set(resp.results);
    });
  }

  openCharacterModal(id: string) {
    this.service.getOne(id).subscribe((resp) => {
      const modalRef = this.modalService.open(CharacterModal);
      modalRef.componentInstance.characterDetail = resp;
    });
  }
}
