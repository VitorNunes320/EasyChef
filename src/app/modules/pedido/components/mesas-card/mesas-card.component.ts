import { Component, Input, OnInit } from "@angular/core";
import { Mesa } from "../../models/mesa.model";

@Component({
  selector: "app-mesas-card",
  templateUrl: "./mesas-card.component.html",
  styleUrls: ["./mesas-card.component.scss"],
})
export class MesasCardComponent implements OnInit {
  @Input() mesas: Mesa[] = [];

  constructor() {}

  ngOnInit(): void {}
}
