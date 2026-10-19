import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickandmortinListComponetes } from './rickandmortin-list-componetes';

describe('RickandmortinListComponetes', () => {
  let component: RickandmortinListComponetes;
  let fixture: ComponentFixture<RickandmortinListComponetes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickandmortinListComponetes],
    }).compileComponents();

    fixture = TestBed.createComponent(RickandmortinListComponetes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
