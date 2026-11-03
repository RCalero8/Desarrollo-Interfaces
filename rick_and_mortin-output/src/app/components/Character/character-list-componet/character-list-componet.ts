import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterItemComponet } from '../character-item-componet/character-item-componet';
import { CharacterService } from '../../../service/character-service';
import { Character } from '../../../interface/character-list-response';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModal } from '../character-modal/character-modal';
@Component({
  imports: [CharacterItemComponet],
  selector: 'app-character-list-componet',
  styleUrl: './character-list-componet.css',
  templateUrl: './character-list-componet.html',
})
export class CharacterListComponet implements OnInit{
  characterService = inject(CharacterService)
  characterList = signal<Character[]>([]);
  private modalService = inject(NgbModal);
  ngOnInit(): void {
    this.characterService.getAllCharacter().subscribe(resp => {
      this.characterList.set(resp.results);
    });
  }

  openCharacterModal(id: string) {
    this.characterService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(CharacterModal);
      modalRef.componentInstance.characterDetail = resp;
    })
  }
}
