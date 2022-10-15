import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesCardComponent } from './ingredientes-card.component';

describe('IngredientesCardComponent', () => {
  let component: IngredientesCardComponent;
  let fixture: ComponentFixture<IngredientesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
