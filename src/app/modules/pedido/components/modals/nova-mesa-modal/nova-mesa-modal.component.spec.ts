import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMesaModalComponent } from './nova-mesa-modal.component';

describe('NovaMesaModalComponent', () => {
  let component: NovaMesaModalComponent;
  let fixture: ComponentFixture<NovaMesaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaMesaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaMesaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
