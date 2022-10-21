export interface OptionModalModel {
  titulo: string;
  mensagem: string;
  botoes: BotaoOptionModal[];
}

export interface BotaoOptionModal {
  id: number;
  texto: string;
  classe: string;
}
