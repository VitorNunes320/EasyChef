import {
  BreakpointObserver,
  BreakpointState,
  MediaMatcher,
} from "@angular/cdk/layout";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Inventario } from "../../models/inventario.model";

@Component({
  selector: "app-inventario-tabela",
  templateUrl: "./inventario-tabela.component.html",
  styleUrls: ["./inventario-tabela.component.scss"],
})
export class InventarioTabelaComponent implements OnInit {
  @Input() inventarios: Inventario[] = [];
  @Output() emitOpcao: EventEmitter<number> = new EventEmitter();
  public truncate: boolean = false;
  public displayedColumns: string[] = [
    "inventario",
    "quantidade",
    "unidadeMedida",
    "valor",
    "estoqueMinimo",
    "estoqueMaximo",
    "atualizadoEm",
    "usuarioAtualizou",
    "acao",
  ];
  public inventarioDataSource: MatTableDataSource<Inventario> =
    new MatTableDataSource(this.inventarios);

  matcher!: MediaQueryList;

  constructor(public mediaMatcher: MediaMatcher) {}

  ngOnInit(): void {
    this.inventarioDataSource = new MatTableDataSource(this.inventarios);
    this.matcher = this.mediaMatcher.matchMedia("(min-width: 1000px)");

    this.matcher.addEventListener("change", this.myListener);
  }

  ngOnDestroy() {
    this.matcher.removeEventListener("change", this.myListener);
  }

  myListener(event: { matches: any }) {
    if (event.matches) {
      this.truncate = true;
    } else {
      this.truncate = false;
    }
    console.log(this.truncate);
  }

  public selecionarOpcao(opcao: number): void {
    this.emitOpcao.emit(opcao);
  }
}
