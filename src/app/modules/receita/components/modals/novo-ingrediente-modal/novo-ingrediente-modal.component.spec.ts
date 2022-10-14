import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoIngredienteModalComponent } from './novo-ingrediente-modal.component';

describe('NovoIngredienteModalComponent', () => {
  let component: NovoIngredienteModalComponent;
  let fixture: ComponentFixture<NovoIngredienteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoIngredienteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoIngredienteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
