import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { OptionModalModel } from "../../models/option-dialog.model";

@Component({
  selector: "app-option-modal",
  templateUrl: "./option-modal.component.html",
  styleUrls: ["./option-modal.component.scss"],
})
export class OptionModalComponent implements OnInit {
  public dados: OptionModalModel = <OptionModalModel>{};
  constructor(
    public dialogRef: MatDialogRef<OptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OptionModalModel
  ) {
    this.dados = data;
  }

  ngOnInit(): void {}

  public selecionarOpcao(opcao: number): void {
    this.dialogRef.close(opcao);
  }
}
