import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SnackbarComponent } from "src/app/modules/shared/components/snackbar/snackbar.component";
import { SnackBarTheme } from "src/app/modules/shared/models/snackbar.theme.enum";
import { Ingrediente } from "../../../models/ingrediente.model";
import { IngredienteReceita } from "../../../models/receita.model";

@Component({
  selector: "app-nova-receita-modal",
  templateUrl: "./nova-receita-modal.component.html",
  styleUrls: ["./nova-receita-modal.component.scss"],
})
export class NovaReceitaModalComponent implements OnInit {
  public loading: boolean = false;
  public typingTimer: any;
  public doneTypingInterval = 2000;
  public receitaIngredientes: IngredienteReceita[] = [];
  public ingredientes: Ingrediente[] = [];
  public ingredientes2: Ingrediente[] = [
    {
      id: "1",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Banana",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "2",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Abacate",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "3",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Arroz",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "4",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Maçã",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "5",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Macarrão",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "6",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Lasanha",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "7",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Pizza",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "8",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Almondega",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "9",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Laranja",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
    {
      id: "10",
      imagem: "https://i.imgur.com/wFNNWEj.jpeg",
      nome: "Limão",
      unidadeMedida: "kg",
      descricao: "Farinha de trigo",
      valor: 50,
    },
  ];
  public file: File | null = null;
  public receitaForm: FormGroup = this._formBuilder.group({
    nome: ["", [Validators.required]],
    descricao: [""],
    ingredientes: this._formBuilder.array([]),
    valor: [1, [Validators.required]],
  });
  public buscaIngrediente: string = "";

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly snackbarComponent: SnackbarComponent
  ) {}

  ngOnInit(): void {}

  public addFile(value: File | null): void {
    this.file = value;
  }

  public onTyping(busca: string): void {
    this.loading = true;
    this.ingredientes = [];

    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.buscarIngredientes(busca);
    }, this.doneTypingInterval);
  }

  displayFn(ingrediente: Ingrediente): string {
    return ingrediente && ingrediente.nome ? ingrediente.nome : "";
  }

  public buscarIngredientes(busca: string): void {
    this.ingredientes = this.ingredientes2
      .filter((ingrediente) =>
        ingrediente?.nome
          ? ingrediente?.nome
              ?.toLowerCase()
              ?.includes(busca != "" ? busca?.toLowerCase() : "")
          : ""
      )
      .slice(0, 5);
    this.loading = false;
  }

  public isInList(value: Ingrediente): boolean {
    let resultado: boolean = false;
    this.receitaIngredientes.forEach((ingrediente: IngredienteReceita) => {
      if (ingrediente.id == value.id) {
        resultado = true;
        return;
      }
    });

    return resultado;
  }

  public adicionarIngrediente(ingrediente: Ingrediente): void {
    if (this.isInList(ingrediente)) {
      this.snackbarComponent.openSnackBar(
        "ingredienteJaFoiSelecionado",
        SnackBarTheme.success,
        3000
      );
      return;
    }
    let ingredienteReceita: IngredienteReceita = <IngredienteReceita>{
      id: ingrediente.id,
      nome: ingrediente.nome,
      imagem: ingrediente.imagem,
      valor: ingrediente.valor,
      quantidade: 1,
      unidadeMedida: ingrediente.unidadeMedida,
    };
    this.receitaIngredientes.push(ingredienteReceita);
  }

  public removerIngrediente(index: number): void {
    this.receitaIngredientes.splice(index, 1);
  }

  public limpar(): void {
    this.receitaIngredientes = [];
    this.receitaForm.reset();
    this.file = null;
  }
}
