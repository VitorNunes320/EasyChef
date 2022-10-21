import { Component, OnInit } from "@angular/core";
import { Receita } from "./../../models/receita.model";
import { MatDialog } from "@angular/material/dialog";
import { NovaReceitaModalComponent } from "../modals/nova-receita-modal/nova-receita-modal.component";

@Component({
  selector: "app-receita",
  templateUrl: "./receita.component.html",
  styleUrls: ["./receita.component.scss"],
})
export class ReceitaComponent implements OnInit {
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;
  public receitas: Receita[] = [
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
    },
    {
      id: "1",
      nome: "Macarrão",
      imagem: "https://i.imgur.com/tASMPby.jpeg",
      descricao: "Macarrão",
      ingredientes: [
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
        {
          id: "1",
          nome: "Farinha",
          imagem: "https://i.imgur.com/wFNNWEj.jpeg",
          valor: 50,
          quantidade: 2,
          unidadeMedida: "kg",
        },
      ],
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

  public addReceita(): void {
    const dialogRef = this.dialog.open(NovaReceitaModalComponent, {
      maxWidth: "1000px",
      width: "100%",
      backdropClass: "backdrop-blur",
    });
  }
}
