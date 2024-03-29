import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../../autenticacao/services/storage.service";
import { HeaderItem } from "../../models/header-item.model";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-menu",
  templateUrl: "./default-template.component.html",
  styleUrls: ["./default-template.component.scss"],
})
export class DefaultTemplateComponent implements OnInit {
  public headerItens: HeaderItem[] = [
    {
      nome: "dashboard",
      links: [{ nome: "dashboard", link: "/dashboard" }],
    },
    {
      nome: "pedidos",
      links: [
        { nome: "listaPedidos", link: "/pedidos" },
        { nome: "listaMesas", link: "/mesas" },
      ],
    },
    {
      nome: "receitas",
      links: [
        { nome: "receitas", link: "/receitas" },
        { nome: "ingredientes", link: "/ingredientes" },
      ],
    },
    {
      nome: "inventario",
      links: [{ nome: "inventario", link: "/inventario" }],
    },
    {
      nome: "preparacao",
      links: [{ nome: "preparacaoPedidos", link: "/preparacao" }],
    },
    {
      nome: "relatorios",
      links: [{ nome: "relatorioPedidos", link: "/relatorios" }],
    },
  ];

  constructor(
    public storageService: StorageService,
    private translate: TranslateService
  ) {
    this.translate.use("pt-br");
  }

  ngOnInit(): void {}

  public excluirUsuario() {
    var usuarioId = this.storageService.getUsuarioId();
  }
}
