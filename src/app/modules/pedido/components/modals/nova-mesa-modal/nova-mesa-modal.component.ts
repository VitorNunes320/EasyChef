import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { PedidoService } from "./../../../services/pedido.service";

@Component({
  selector: "app-nova-mesa-modal",
  templateUrl: "./nova-mesa-modal.component.html",
  styleUrls: ["./nova-mesa-modal.component.scss"],
})
export class NovaMesaModalComponent implements OnInit {
  public loading: boolean = false;
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

  constructor(
    private readonly _formBuilder: FormBuilder,
    public dialog: MatDialogRef<NovaMesaModalComponent>,
    public pedidoService: PedidoService
  ) {}

  ngOnInit(): void {}

  public addMesa(): void {
    this.loading = true;
    this.pedidoService.addMesa(this.mesaForm.value).subscribe({
      next: (response) => {
        this.loading = false;
        this.dialog.close(true);
      },
      error: (response) => {
        this.loading = false;
      },
    });
    this.mesaForm.reset();
  }
}
