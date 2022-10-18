import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPedidosTabelaComponent } from './relatorio-pedidos-tabela.component';

describe('RelatorioPedidosTabelaComponent', () => {
  let component: RelatorioPedidosTabelaComponent;
  let fixture: ComponentFixture<RelatorioPedidosTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioPedidosTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioPedidosTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
