import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IngredienteReceita, Receita } from "../../models/receita.model";

@Component({
  selector: "app-receita-card",
  templateUrl: "./receita-card.component.html",
  styleUrls: ["./receita-card.component.scss"],
})
export class ReceitaCardComponent implements OnInit {
  @Input() receitas: Receita[] = [];
  @Output() emitOpcao: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public getValorTotal(ingredientes: IngredienteReceita[]): number {
    var valorTotal: number = 0;
    ingredientes.forEach((ingrediente: IngredienteReceita) => {
      valorTotal += ingrediente.valor;
    });

    return valorTotal;
  }

  public selecionarOpcao(opcao: number): void {
    this.emitOpcao.emit(opcao);
  }
}
