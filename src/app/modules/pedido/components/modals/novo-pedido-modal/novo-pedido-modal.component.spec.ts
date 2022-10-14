import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPedidoModalComponent } from './novo-pedido-modal.component';

describe('NovoPedidoModalComponent', () => {
  let component: NovoPedidoModalComponent;
  let fixture: ComponentFixture<NovoPedidoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPedidoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoPedidoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
