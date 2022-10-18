import { Component, Input, OnInit } from "@angular/core";
import { Inventario } from "./../../models/inventario.model";

@Component({
  selector: "app-inventario-card",
  templateUrl: "./inventario-card.component.html",
  styleUrls: ["./inventario-card.component.scss"],
})
export class InventarioCardComponent implements OnInit {
  @Input() inventarios: Inventario[] = [];
  constructor() {}

  ngOnInit(): void {}
}
