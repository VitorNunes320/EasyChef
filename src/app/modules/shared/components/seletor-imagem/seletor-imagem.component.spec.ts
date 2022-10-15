import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorImagemComponent } from './seletor-imagem.component';

describe('SeletorImagemComponent', () => {
  let component: SeletorImagemComponent;
  let fixture: ComponentFixture<SeletorImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorImagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
