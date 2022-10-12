import { Produto } from "./produto.model";

export interface Preparacao {
    id: string;
    codigo: string;
    status: number;
    mesaId: string;
    mesaNome: string;
    data: Date;
    itens: Produto[];
    observacoes: string;
}