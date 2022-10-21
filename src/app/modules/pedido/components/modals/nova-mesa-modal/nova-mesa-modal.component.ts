import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-nova-mesa-modal",
  templateUrl: "./nova-mesa-modal.component.html",
  styleUrls: ["./nova-mesa-modal.component.scss"],
})
export class NovaMesaModalComponent implements OnInit {
  public mesaForm: FormGroup = this._formBuilder.group({
    nome: ["", [Validators.required]],
    lugares: [
      1,
      [
        Validators.required,
        Validators.min(1),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ],
    ],
  });

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
