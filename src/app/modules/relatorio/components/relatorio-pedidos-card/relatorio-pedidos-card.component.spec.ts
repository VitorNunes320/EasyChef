import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPedidosCardComponent } from './relatorio-pedidos-card.component';

describe('RelatorioPedidosCardComponent', () => {
  let component: RelatorioPedidosCardComponent;
  let fixture: ComponentFixture<RelatorioPedidosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioPedidosCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioPedidosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
