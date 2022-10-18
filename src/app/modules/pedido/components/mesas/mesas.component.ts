import { Component, OnInit } from "@angular/core";
import { Mesa } from "../../models/mesa.model";

@Component({
  selector: "app-mesas",
  templateUrl: "./mesas.component.html",
  styleUrls: ["./mesas.component.scss"],
})
export class MesasComponent implements OnInit {
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;
  public mesas: Mesa[] = [
    { id: "1", codigo: 1, ocupada: true, nome: "Mesa" },
    { id: "1", codigo: 2, ocupada: false, nome: "Mesa" },
    { id: "1", codigo: 3, ocupada: false, nome: "Mesa" },
    { id: "1", codigo: 4, ocupada: false, nome: "Mesa" },
    { id: "1", codigo: 5, ocupada: false, nome: "Mesa" },
    { id: "1", codigo: 6, ocupada: true, nome: "Mesa" },
    { id: "1", codigo: 7, ocupada: false, nome: "Mesa" },
  ];

  constructor() {}

  ngOnInit(): void {}

  public onPaginaChange(event: number): void {
    this.pagina = event;
  }

  public onQuantidadeChange(event: number): void {
    this.quantidade = event;
  }
}
