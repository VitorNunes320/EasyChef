import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Ingrediente } from "../../models/ingrediente.model";

@Component({
  selector: "app-ingredientes-card",
  templateUrl: "./ingredientes-card.component.html",
  styleUrls: ["./ingredientes-card.component.scss"],
})
export class IngredientesCardComponent implements OnInit {
  @Input() ingredientes: Ingrediente[] = [];
  @Output() emitOpcao: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public selecionarOpcao(opcao: number): void {
    this.emitOpcao.emit(opcao);
  }
}
