import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioTabelaComponent } from './inventario-tabela.component';

describe('InventarioTabelaComponent', () => {
  let component: InventarioTabelaComponent;
  let fixture: ComponentFixture<InventarioTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
