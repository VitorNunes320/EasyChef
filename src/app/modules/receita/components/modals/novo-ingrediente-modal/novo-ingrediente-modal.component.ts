import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-novo-ingrediente-modal",
  templateUrl: "./novo-ingrediente-modal.component.html",
  styleUrls: ["./novo-ingrediente-modal.component.scss"],
})
export class NovoIngredienteModalComponent implements OnInit {
  public file: File | null = null;
  public ingredienteForm: FormGroup = this._formBuilder.group({
    nome: [""],
    unidadeMedida: [""],
    descricao: [""],
    valor: [""],
  });

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public addFile(value: File | null): void {
    this.file = value;
  }
}
