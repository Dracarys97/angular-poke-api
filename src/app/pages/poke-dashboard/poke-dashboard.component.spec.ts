import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDashboardComponent } from './poke-dashboard.component';

describe('PokeDashboardComponent', () => {
  let component: PokeDashboardComponent;
  let fixture: ComponentFixture<PokeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeDashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
