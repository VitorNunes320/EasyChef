export interface Receita {
    id: string;
    nome: string;
    imagem: string;
    descricao: string;
    ingredientes: IngredienteReceita[];
}

export interface IngredienteReceita {
    id: string;
    nome: string;
    imagem: string;
    valor: number;
    quantidade: number;
    unidadeMedida: string;
}