import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasTabelaComponent } from './mesas-tabela.component';

describe('MesasTabelaComponent', () => {
  let component: MesasTabelaComponent;
  let fixture: ComponentFixture<MesasTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
