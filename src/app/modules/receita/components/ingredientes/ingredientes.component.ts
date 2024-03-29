import { Component, OnInit } from "@angular/core";
import { Ingrediente } from "../../models/ingrediente.model";
import { MatDialog } from "@angular/material/dialog";
import { NovoIngredienteModalComponent } from "../modals/novo-ingrediente-modal/novo-ingrediente-modal.component";
import {
  BotaoOptionModal,
  OptionModalModel,
} from "src/app/modules/shared/models/option-dialog.model";
import { OptionModalComponent } from "src/app/modules/shared/components/option-modal/option-modal.component";
import { ReceitaService } from "../../services/receita.service";

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
  public ingredientes: Ingrediente[] = [];
  public loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    public receitaService: ReceitaService
  ) {}

  ngOnInit(): void {
    this.getIngredientes();
  }

  public onPaginaChange(event: number): void {
    this.pagina = event;
  }

  public onQuantidadeChange(event: number): void {
    this.quantidade = event;
  }

  public addIngrediente(): void {
    const dialogRef = this.dialog.open(NovoIngredienteModalComponent, {
      maxWidth: "1000px",
      width: "100%",
      backdropClass: "backdrop-blur",
    });
  }

  public onOpcaoSelected(opcao: number): void {
    if (opcao === 0) {
      this.remover(opcao.toString());
    }
  }

  public remover(id: string): void {
    const dialogData: OptionModalModel = <OptionModalModel>{
      titulo: "removerIngrediente",
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

  public getIngredientes(): void {
    this.loading = true;
    this.receitaService.getIngredientes("", 1, 15).subscribe({
      next: (response) => {
        this.ingredientes = response.dados.dados;
        this.paginas = Math.ceil(response.dados.quantidade / this.quantidade);
        this.loading = false;
      },
      error: () => {
        this.ingredientes = [];
        this.paginas = 0;
        this.loading = false;
      },
    });
  }
}
