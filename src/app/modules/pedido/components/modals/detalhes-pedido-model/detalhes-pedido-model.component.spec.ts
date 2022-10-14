import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPedidoModelComponent } from './detalhes-pedido-model.component';

describe('DetalhesPedidoModelComponent', () => {
  let component: DetalhesPedidoModelComponent;
  let fixture: ComponentFixture<DetalhesPedidoModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPedidoModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPedidoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
