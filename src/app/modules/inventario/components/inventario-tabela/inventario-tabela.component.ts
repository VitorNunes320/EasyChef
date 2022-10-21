import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Inventario } from "../../models/inventario.model";

@Component({
  selector: "app-inventario-tabela",
  templateUrl: "./inventario-tabela.component.html",
  styleUrls: ["./inventario-tabela.component.scss"],
})
export class InventarioTabelaComponent implements OnInit {
  @Input() inventarios: Inventario[] = [];
  @Output() emitOpcao: EventEmitter<number> = new EventEmitter();
  public displayedColumns: string[] = [
    "inventario",
    "quantidade",
    "unidadeMedida",
    "descricao",
    "valor",
    "estoqueMinimo",
    "estoqueMaximo",
    "atualizadoEm",
    "usuarioAtualizou",
    "acao",
  ];
  public inventarioDataSource: MatTableDataSource<Inventario> =
    new MatTableDataSource(this.inventarios);

  constructor() {}

  ngOnInit(): void {
    this.inventarioDataSource = new MatTableDataSource(this.inventarios);
  }

  public selecionarOpcao(opcao: number): void {
    this.emitOpcao.emit(opcao);
  }
}
