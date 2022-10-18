import { Component, Input, OnInit } from "@angular/core";
import { Relatorio } from "../../models/relatorio.model";

@Component({
  selector: "app-relatorio-pedidos-card",
  templateUrl: "./relatorio-pedidos-card.component.html",
  styleUrls: ["./relatorio-pedidos-card.component.scss"],
})
export class RelatorioPedidosCardComponent implements OnInit {
  @Input() relatorios: Relatorio[] = [];
  constructor() {}

  ngOnInit(): void {}
}
