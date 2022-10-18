import { Component, OnInit } from "@angular/core";
import { ComparacaoStatus } from "../../models/comparacao-status.enum";
import { Relatorio } from "../../models/relatorio.model";

@Component({
  selector: "app-relatorio-pedidos",
  templateUrl: "./relatorio-pedidos.component.html",
  styleUrls: ["./relatorio-pedidos.component.scss"],
})
export class RelatorioPedidosComponent implements OnInit {
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;
  public relatorios: Relatorio[] = [
    {
      periodo: "Janeiro.",
      numeroPedidos: 72,
      valorTotal: 960.267,
      comparacao: "Igual ao mês anterior",
      comparacaoStatus: ComparacaoStatus.Igual,
    },
    {
      periodo: "Fevereiro.",
      numeroPedidos: 76,
      valorTotal: 1500.67,
      comparacao: "15% maior que mês anterior",
      comparacaoStatus: ComparacaoStatus.Maior,
    },
    {
      periodo: "Março.",
      numeroPedidos: 31,
      valorTotal: 1653.703,
      comparacao: "Igual ao mês anterior",
      comparacaoStatus: ComparacaoStatus.Igual,
    },
    {
      periodo: "Abril.",
      numeroPedidos: 82,
      valorTotal: 1226.373,
      comparacao: "15% maior que mês anterior",
      comparacaoStatus: ComparacaoStatus.Maior,
    },
    {
      periodo: "Maio.",
      numeroPedidos: 17,
      valorTotal: 711.398,
      comparacao: "Igual ao mês anterior",
      comparacaoStatus: ComparacaoStatus.Igual,
    },
    {
      periodo: "Junho.",
      numeroPedidos: 73,
      valorTotal: 1029.55,
      comparacao: "15% maior que mês anterior",
      comparacaoStatus: ComparacaoStatus.Maior,
    },
    {
      periodo: "Julho.",
      numeroPedidos: 62,
      valorTotal: 1430.971,
      comparacao: "15% maior que mês anterior",
      comparacaoStatus: ComparacaoStatus.Maior,
    },
    {
      periodo: "Agosto.",
      numeroPedidos: 77,
      valorTotal: 754.136,
      comparacao: "15% menor que mês anterior",
      comparacaoStatus: ComparacaoStatus.Menor,
    },
    {
      periodo: "Setembro.",
      numeroPedidos: 26,
      valorTotal: 1606.242,
      comparacao: "Igual ao mês anterior",
      comparacaoStatus: ComparacaoStatus.Igual,
    },
    {
      periodo: "Outubro.",
      numeroPedidos: 19,
      valorTotal: 687.354,
      comparacao: "Igual ao mês anterior",
      comparacaoStatus: ComparacaoStatus.Igual,
    },
    {
      periodo: "Novembro.",
      numeroPedidos: 33,
      valorTotal: 1007.812,
      comparacao: "15% menor que mês anterior",
      comparacaoStatus: ComparacaoStatus.Menor,
    },
    {
      periodo: "Dezembro.",
      numeroPedidos: 14,
      valorTotal: 1629.727,
      comparacao: "100% maior que mês anterior",
      comparacaoStatus: ComparacaoStatus.Maior,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
