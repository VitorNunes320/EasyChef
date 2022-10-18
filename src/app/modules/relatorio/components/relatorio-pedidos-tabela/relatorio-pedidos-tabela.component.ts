import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Relatorio } from "../../models/relatorio.model";

@Component({
  selector: "app-relatorio-pedidos-tabela",
  templateUrl: "./relatorio-pedidos-tabela.component.html",
  styleUrls: ["./relatorio-pedidos-tabela.component.scss"],
})
export class RelatorioPedidosTabelaComponent implements OnInit {
  @Input() relatorios: Relatorio[] = [];
  public displayedColumns: string[] = [
    "periodo",
    "numeroPedidos",
    "valorTotal",
    "comparacao",
    "acao",
  ];
  public relatoriosDataSource: MatTableDataSource<Relatorio> =
    new MatTableDataSource(this.relatorios);

  constructor() {}

  ngOnInit(): void {
    this.relatoriosDataSource = new MatTableDataSource(this.relatorios);
  }
}
