import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UnidadeMedida } from "../../../models/unidade-medida.model";
import { ReceitaService } from "./../../../services/receita.service";
import { Ingrediente } from "./../../../models/ingrediente.model";

@Component({
  selector: "app-novo-ingrediente-modal",
  templateUrl: "./novo-ingrediente-modal.component.html",
  styleUrls: ["./novo-ingrediente-modal.component.scss"],
})
export class NovoIngredienteModalComponent implements OnInit {
  public file: File | null = null;
  public loading: boolean = false;
  public buscaUnidadeMedida: string = "";
  public unidadesMedidas: UnidadeMedida[] = [];
  public ingrediente: Ingrediente = <Ingrediente>{};
  public typingTimer: any;
  public doneTypingInterval = 2000;
  public unidadeMedidaId: string = "";

  public ingredienteForm: FormGroup = this._formBuilder.group({
    nome: [""],
    descricao: [""],
    valor: [""],
  });

  constructor(
    private readonly _formBuilder: FormBuilder,
    private receitaService: ReceitaService
  ) {}

  ngOnInit(): void {}

  public addFile(value: File | null): void {
    this.file = value;
  }

  displayFn(unidadeMedida: UnidadeMedida): string {
    return unidadeMedida && unidadeMedida.nome ? unidadeMedida.nome : "";
  }

  public onTyping(busca: string): void {
    this.loading = true;
    this.unidadesMedidas = [];

    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.getUnidadesMedidas(busca);
    }, this.doneTypingInterval);
  }

  public getUnidadesMedidas(busca: string): void {
    this.loading = true;
    this.receitaService.getUnidadesMedidas(busca, 1, 10).subscribe({
      next: (response) => {
        this.unidadesMedidas = response.dados.dados;
        this.loading = false;
      },
      error: (error) => {
        this.unidadesMedidas = [];
        this.loading = false;
      },
    });
  }

  public selectUnidadeMedida(id: string) {
    this.unidadeMedidaId = id;
  }

  public cadastrarIngrediente(): void {
    this.ingrediente = this.ingredienteForm.value;
    this.ingrediente.unidadeMedidaId = this.unidadeMedidaId;
    
    console.log(this.ingrediente);
  }

  public limpar(): void {
    this.ingredienteForm.reset();
    this.unidadeMedidaId = "";
  }
}
