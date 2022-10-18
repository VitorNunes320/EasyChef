import { ComparacaoStatus } from "./comparacao-status.enum";

export interface Relatorio {
  periodo: string;
  numeroPedidos: number;
  valorTotal: number;
  comparacao: string;
  comparacaoStatus: ComparacaoStatus;
}
