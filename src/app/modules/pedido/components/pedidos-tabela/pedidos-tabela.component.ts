import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pedidos-tabela',
  templateUrl: './pedidos-tabela.component.html',
  styleUrls: ['./pedidos-tabela.component.scss']
})
export class PedidosTabelaComponent implements OnInit {
  @Input() pedidos: Pedido[] = [];
  public displayedColumns: string[] = ['pedido', 'data', 'quantidadeItens', 'valorTotal', 'status', 'acao'];
  public pedidosDataSource: MatTableDataSource<Pedido> = new MatTableDataSource(this.pedidos);

  constructor() { }

  ngOnInit(): void {
    this.pedidosDataSource = new MatTableDataSource(this.pedidos);
  }

}
