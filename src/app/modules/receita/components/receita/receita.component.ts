import { Component, OnInit } from "@angular/core";
import { Receita } from "./../../models/receita.model";
import { MatDialog } from "@angular/material/dialog";
import { NovaReceitaModalComponent } from "../modals/nova-receita-modal/nova-receita-modal.component";
import { OptionModalModel } from "src/app/modules/shared/models/option-dialog.model";
import { OptionModalComponent } from "src/app/modules/shared/components/option-modal/option-modal.component";
import { ReceitaService } from "../../services/receita.service";

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
  public receitas: Receita[] = [];
  public loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    public receitaService: ReceitaService
  ) {}

  ngOnInit(): void {
    this.getReceitas();
  }

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

  public onOpcaoSelected(opcao: number): void {
    if (opcao === 0) {
      this.remover(opcao.toString());
    }
  }

  public remover(id: string): void {
    const dialogData: OptionModalModel = <OptionModalModel>{
      titulo: "removerReceita",
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

  public getReceitas(): void {
    this.loading = true;
    this.receitaService.getReceitas("", 1, 15).subscribe({
      next: (response) => {
        this.receitas = response.dados.dados;
        this.paginas = Math.ceil(response.dados.quantidade / this.quantidade);
        this.loading = false;
      },
      error: () => {
        this.receitas = [];
        this.paginas = 0;
        this.loading = false;
      },
    });
  }
}
