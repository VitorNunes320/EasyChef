import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueSegurancaComponent } from './estoque-seguranca.component';

describe('EstoqueSegurancaComponent', () => {
  let component: EstoqueSegurancaComponent;
  let fixture: ComponentFixture<EstoqueSegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueSegurancaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
