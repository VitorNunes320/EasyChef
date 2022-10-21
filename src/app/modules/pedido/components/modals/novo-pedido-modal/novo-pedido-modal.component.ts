import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-novo-pedido-modal",
  templateUrl: "./novo-pedido-modal.component.html",
  styleUrls: ["./novo-pedido-modal.component.scss"],
})
export class NovoPedidoModalComponent implements OnInit {
  public ingredienteForm: FormGroup = this._formBuilder.group({
    nome: [""],
    unidadeMedida: [""],
    descricao: [""],
    valor: [""],
  });

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
