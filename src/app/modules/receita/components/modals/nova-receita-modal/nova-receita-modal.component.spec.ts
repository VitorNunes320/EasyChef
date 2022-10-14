import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaReceitaModalComponent } from './nova-receita-modal.component';

describe('NovaReceitaModalComponent', () => {
  let component: NovaReceitaModalComponent;
  let fixture: ComponentFixture<NovaReceitaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaReceitaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaReceitaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
