import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPreparacaoModalComponent } from './detalhes-preparacao-modal.component';

describe('DetalhesPreparacaoModalComponent', () => {
  let component: DetalhesPreparacaoModalComponent;
  let fixture: ComponentFixture<DetalhesPreparacaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPreparacaoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPreparacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
