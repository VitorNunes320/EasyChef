import { Component, Input, OnInit } from '@angular/core';
import { Ingrediente } from '../../models/ingrediente.model';

@Component({
  selector: 'app-ingredientes-card',
  templateUrl: './ingredientes-card.component.html',
  styleUrls: ['./ingredientes-card.component.scss']
})
export class IngredientesCardComponent implements OnInit {
  @Input() ingredientes: Ingrediente[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
