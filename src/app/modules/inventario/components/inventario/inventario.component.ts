import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { OptionModalComponent } from "src/app/modules/shared/components/option-modal/option-modal.component";
import { OptionModalModel } from "src/app/modules/shared/models/option-dialog.model";
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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public onPaginaChange(event: number): void {
    this.pagina = event;
  }

  public onQuantidadeChange(event: number): void {
    this.quantidade = event;
  }

  public onOpcaoSelected(opcao: number): void {
    if (opcao === 0) {
      this.remover(opcao.toString());
    }
  }

  public remover(id: string): void {
    const dialogData: OptionModalModel = <OptionModalModel>{
      titulo: "removerItem",
      mensagem: "confirmarAcaoTexto",
      botoes: [
        {
          id: 0,
          texto: "nao",
          classe: "mat-stroked-button light-button",
        },
        {
          id: 1,
          texto: "sim",
          classe: "mat-raised-button pink-button",
        },
      ],
    };

    const dialogRef = this.dialog.open(OptionModalComponent, {
      maxWidth: "520px",
      data: dialogData,
      backdropClass: "backdrop-blur",
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult == 1) {
        console.log(dialogResult);
      }
    });
  }
}
