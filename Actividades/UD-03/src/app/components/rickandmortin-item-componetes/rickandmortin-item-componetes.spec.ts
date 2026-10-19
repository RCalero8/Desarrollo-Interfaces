import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickandmortinItemComponetes } from './rickandmortin-item-componetes';

describe('RickandmortinItemComponetes', () => {
  let component: RickandmortinItemComponetes;
  let fixture: ComponentFixture<RickandmortinItemComponetes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickandmortinItemComponetes],
    }).compileComponents();

    fixture = TestBed.createComponent(RickandmortinItemComponetes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
