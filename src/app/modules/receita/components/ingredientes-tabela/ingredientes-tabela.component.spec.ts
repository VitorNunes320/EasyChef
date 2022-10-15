import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesTabelaComponent } from './ingredientes-tabela.component';

describe('IngredientesTabelaComponent', () => {
  let component: IngredientesTabelaComponent;
  let fixture: ComponentFixture<IngredientesTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientesTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientesTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
