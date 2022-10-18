import { Component, OnInit } from "@angular/core";
import { Inventario } from "../../models/inventario.model";

@Component({
  selector: "app-inventario",
  templateUrl: "./inventario.component.html",
  styleUrls: ["./inventario.component.scss"],
})
export class InventarioComponent implements OnInit {
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;
  public inventarios: Inventario[] = [
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 1,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 2,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 2,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 1,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao:
        "Qui cupiditate quis est ipsa fugiat ullam debitis adipisci minima. Beatae repellendus sed. Possimus doloremque adipisci. Et eos doloremque aut velit. Ea quaerat eum assumenda. Architecto accusamus velit tempora voluptatem accusamus eum tempore.",
      valor: 41,
      quantidade: 6,
      estoqueMinimo: 25,
      estoqueMaximo: 7,
      atualizadoEm: new Date(),
      usuarioAtualizou: "vitor.nunes@aluno.ifsp.edu.br",
      status: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public onPaginaChange(event: number): void {
    this.pagina = event;
  }

  public onQuantidadeChange(event: number): void {
    this.quantidade = event;
  }
}
