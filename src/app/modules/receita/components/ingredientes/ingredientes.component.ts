import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../models/ingrediente.model';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent implements OnInit {
  public pagina: number = 1;
  public quantidade: number = 15;
  public paginas: number = 15;
  public viewTipo: number = 0;
  public ingredientes: Ingrediente[] = [
    { id: '1', imagem: 'https://i.imgur.com/wFNNWEj.jpeg', nome: 'Farinha', unidadeMedida: 'kg', descricao: 'Farinha de trigo', valor: 50 },
    { id: '1', imagem: 'https://i.imgur.com/wFNNWEj.jpeg', nome: 'Farinha', unidadeMedida: 'kg', descricao: 'Farinha de trigo', valor: 50 },
    { id: '1', imagem: 'https://i.imgur.com/wFNNWEj.jpeg', nome: 'Farinha', unidadeMedida: 'kg', descricao: 'Farinha de trigo', valor: 50 },
    { id: '1', imagem: 'https://i.imgur.com/wFNNWEj.jpeg', nome: 'Farinha', unidadeMedida: 'kg', descricao: 'Farinha de trigo', valor: 50 },
    { id: '1', imagem: 'https://i.imgur.com/wFNNWEj.jpeg', nome: 'Farinha', unidadeMedida: 'kg', descricao: 'Farinha de trigo', valor: 50 },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
