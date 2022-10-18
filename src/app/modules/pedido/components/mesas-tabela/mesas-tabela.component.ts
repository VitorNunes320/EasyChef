import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Mesa } from "../../models/mesa.model";

@Component({
  selector: "app-mesas-tabela",
  templateUrl: "./mesas-tabela.component.html",
  styleUrls: ["./mesas-tabela.component.scss"],
})
export class MesasTabelaComponent implements OnInit {
  @Input() mesas: Mesa[] = [];
  public displayedColumns: string[] = ["mesa", "codigo", "ocupada", "acao"];
  public mesasDataSource: MatTableDataSource<Mesa> = new MatTableDataSource(
    this.mesas
  );

  constructor() {}

  ngOnInit(): void {
    this.mesasDataSource = new MatTableDataSource(this.mesas);
  }
}
