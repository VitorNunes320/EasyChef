import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Inventario } from "./../../models/inventario.model";

@Component({
  selector: "app-inventario-card",
  templateUrl: "./inventario-card.component.html",
  styleUrls: ["./inventario-card.component.scss"],
})
export class InventarioCardComponent implements OnInit {
  @Input() inventarios: Inventario[] = [];
  @Output() emitOpcao: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public selecionarOpcao(opcao: number): void {
    this.emitOpcao.emit(opcao);
  }
}
