import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BerryDetail } from '../../interfaces/pokeapi';
import { BerryService } from '../../services/berry-service';
import { SPRITES_URL } from '../../interfaces/utils';

@Component({
  selector: 'app-berry-detail',
  imports: [RouterLink],
  templateUrl: './berry-detail.component.html',
})
export class BerryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(BerryService);

  berry = signal<BerryDetail | null>(null);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getBerry(id).subscribe((b) => this.berry.set(b));
  }

  image(b: BerryDetail): string {
    return `${SPRITES_URL}/items/${b.item.name}.png`;
  }
}
