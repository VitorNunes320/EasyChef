import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasCardComponent } from './mesas-card.component';

describe('MesasCardComponent', () => {
  let component: MesasCardComponent;
  let fixture: ComponentFixture<MesasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
