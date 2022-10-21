import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Ingrediente } from "../../models/ingrediente.model";

@Component({
  selector: "app-ingredientes-tabela",
  templateUrl: "./ingredientes-tabela.component.html",
  styleUrls: ["./ingredientes-tabela.component.scss"],
})
export class IngredientesTabelaComponent implements OnInit {
  @Input() ingredientes: Ingrediente[] = [];
  @Output() emitOpcao: EventEmitter<number> = new EventEmitter();

  public displayedColumns: string[] = [
    "nome",
    "unidadeMedida",
    "descricao",
    "preco",
    "acao",
  ];
  public ingredientesDataSource: MatTableDataSource<Ingrediente> =
    new MatTableDataSource(this.ingredientes);

  constructor() {}

  ngOnInit(): void {
    this.ingredientesDataSource = new MatTableDataSource(this.ingredientes);
  }

  public selecionarOpcao(opcao: number): void {
    this.emitOpcao.emit(opcao);
  }
}
