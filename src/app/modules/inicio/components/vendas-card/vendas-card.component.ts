import { Component, OnInit } from '@angular/core';
import {Product,TopSelling} from './vendas-card-data';

@Component({
  selector: 'app-vendas-card',
  templateUrl: './vendas-card.component.html'
})
export class VendasCardComponent implements OnInit {

  topSelling:Product[];

  constructor() { 

    this.topSelling=TopSelling;
  }

  ngOnInit(): void {
  }

}
