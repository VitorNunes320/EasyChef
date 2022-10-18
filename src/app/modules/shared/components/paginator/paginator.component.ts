import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit {
  @Output() paginaEvent = new EventEmitter<number>();
  @Output() quantidadeEvent = new EventEmitter<number>();

  @Input() pagina: number = 1;
  @Input() quantidade: number = 1;
  @Input() paginas: number = 1;

  constructor() {}

  ngOnInit(): void {}

  public trocarPagina(proxima: boolean): void {
    if (
      (this.pagina >= this.paginas && proxima) ||
      (this.pagina <= 1 && !proxima)
    ) {
      return;
    }

    if (proxima) {
      this.pagina++;
    } else {
      this.pagina--;
    }

    this.paginaEvent.emit(this.pagina);
  }

  public trocarQuantidade(): void {
    this.quantidadeEvent.emit(this.quantidade);
  }
}
