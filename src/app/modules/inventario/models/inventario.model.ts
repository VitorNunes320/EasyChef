import { Ingrediente } from "../../receita/models/ingrediente.model";

export interface Inventario extends Ingrediente {
  quantidade: number;
  estoqueMinimo: number;
  estoqueMaximo: number;
  atualizadoEm: Date;
  usuarioAtualizou: string;
  status: number;
}
