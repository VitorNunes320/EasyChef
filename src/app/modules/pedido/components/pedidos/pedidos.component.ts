import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Pedido } from "../../models/pedido.model";
import { PedidoService } from "../../services/pedido.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.scss"],
})
export class PedidosComponent implements OnInit {
  public loading: boolean = false;
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;

  @Output() emitPedidos: EventEmitter<Pedido[]> = new EventEmitter();
  public pedidos: Pedido[] = [];

  constructor(private readonly pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  public onPaginaChange(event: number): void {
    this.pagina = event;
  }

  public onQuantidadeChange(event: number): void {
    this.quantidade = event;
  }

  public getPedidos(): void {
    this.loading = true;
    this.pedidoService.getPedidos("", 1, 15).subscribe({
      next: (response) => {
        this.pedidos = response.dados.dados;
        this.paginas = Math.ceil(response.dados.quantidade / this.quantidade);
        this.loading = false;
      },
      error: () => {
        this.pedidos = [];
        this.paginas = 0;
        this.loading = false;
      },
    });
  }
}
