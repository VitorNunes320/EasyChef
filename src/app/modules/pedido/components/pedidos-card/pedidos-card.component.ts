import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from '../../models/pedido.model';

@Component({
  selector: 'app-pedidos-card',
  templateUrl: './pedidos-card.component.html',
  styleUrls: ['./pedidos-card.component.scss']
})
export class PedidosCardComponent implements OnInit {
  @Input() pedidos: Pedido[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
