import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DetalhesPedidoModalComponent } from "./detalhes-pedido-modal.component";

describe("DetalhesPedidoModalComponent", () => {
  let component: DetalhesPedidoModalComponent;
  let fixture: ComponentFixture<DetalhesPedidoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesPedidoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesPedidoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
