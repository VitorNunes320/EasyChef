import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaTabelaComponent } from './receita-tabela.component';

describe('ReceitaTabelaComponent', () => {
  let component: ReceitaTabelaComponent;
  let fixture: ComponentFixture<ReceitaTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
