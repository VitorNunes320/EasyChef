import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Mesa } from "../../models/mesa.model";
import { NovaMesaModalComponent } from "../modals/nova-mesa-modal/nova-mesa-modal.component";
import { PedidoService } from "./../../services/pedido.service";

@Component({
  selector: "app-mesas",
  templateUrl: "./mesas.component.html",
  styleUrls: ["./mesas.component.scss"],
})
export class MesasComponent implements OnInit {
  public loading: boolean = false;
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;
  public mesas: Mesa[] = [];

  constructor(public dialog: MatDialog, public pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getMesas();
  }

  public onPaginaChange(event: number): void {
    this.pagina = event;
  }

  public onQuantidadeChange(event: number): void {
    this.quantidade = event;
  }

  public getMesas(): void {
    this.loading = true;
    this.pedidoService.getMesas("", 1, 15).subscribe({
      next: (response) => {
        this.mesas = response.dados.dados;
        this.paginas = Math.ceil(response.dados.quantidade / this.quantidade);
        this.loading = false;
      },
      error: () => {
        this.mesas = [];
        this.paginas = 0;
        this.loading = false;
      },
    });
  }

  public addMesa(): void {
    const dialogRef = this.dialog.open(NovaMesaModalComponent, {
      maxWidth: "1000px",
      width: "100%",
      backdropClass: "backdrop-blur",
    });

    dialogRef.afterClosed().subscribe((recarregar) => {
      if (recarregar) {
        this.getMesas();
      }
    });
  }
}
