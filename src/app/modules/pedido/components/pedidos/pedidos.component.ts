import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pedido } from '../../models/pedido.model';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;

  @Output() emitPedidos: EventEmitter<Pedido[]> = new EventEmitter();
  public pedidos: Pedido[] = [
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 0,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 0,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 3,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 2,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 1,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 2,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 1,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 3,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 2,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
    { 
      id: '', 
      codigo: '#1', 
      data: new Date(), 
      valorTotal: 50, 
      quantidadeItens: 4, 
      usuarioNome: 'Vitor', 
      usuarioId: '', 
      vendedorNome: 'Vitor', 
      vendedorId: '', 
      status: 1,
      produtos: [
        { 
          id: '1',
          nome: 'Hamburguer',
          valor: 15,
          quantidade: 2
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        },
        { 
          id: '1',
          nome: 'Macarrão',
          valor: 10,
          quantidade: 2 
        }
      ]
    },
  ];

  constructor(
    private readonly pedidoService: PedidoService
    ) { 
  }

  ngOnInit(): void {
  }

}
