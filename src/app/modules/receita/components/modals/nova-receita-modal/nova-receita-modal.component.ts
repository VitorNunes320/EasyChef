import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-nova-receita-modal",
  templateUrl: "./nova-receita-modal.component.html",
  styleUrls: ["./nova-receita-modal.component.scss"],
})
export class NovaReceitaModalComponent implements OnInit {
  public file: File | null = null;
  public receitaForm: FormGroup = this._formBuilder.group({
    nome: [""],
    unidadeMedida: [""],
    peso: ["0"],
    kcal: ["0"],
    descricao: [""],
    valor: [""],
  });

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public addFile(value: File | null): void {
    this.file = value;
  }
}
