import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Ingrediente } from "../../models/ingrediente.model";
import { NovoIngredienteModalComponent } from "../modals/novo-ingrediente-modal/novo-ingrediente-modal.component";

@Component({
  selector: "app-ingredientes",
  templateUrl: "./ingredientes.component.html",
  styleUrls: ["./ingredientes.component.scss"],
})
export class IngredientesComponent implements OnInit {
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;
  public ingredientes: Ingrediente[] = [
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Farinha",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public addReceita(): void {
    const dialogRef = this.dialog.open(NovoIngredienteModalComponent, {
      maxWidth: "1000px",
      width: "100%",
      backdropClass: "backdrop-blur",
    });
  }
}
