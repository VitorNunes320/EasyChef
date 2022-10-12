import { ProdutoPedido } from './produto-pedido.model';

export interface Pedido {
  id: string;
  codigo: string;
  data: Date;
  valorTotal: number;
  quantidadeItens: number;
  observacoes?: string;
  produtos: ProdutoPedido[];
  usuarioNome: string;
  usuarioId: string;
  vendedorNome: string;
  vendedorId: string;
  status: number;
}