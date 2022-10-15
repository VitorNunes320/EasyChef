import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IngredienteReceita, Receita } from './../../models/receita.model';

@Component({
  selector: 'app-receita-tabela',
  templateUrl: './receita-tabela.component.html',
  styleUrls: ['./receita-tabela.component.scss']
})
export class ReceitaTabelaComponent implements OnInit {
  @Input() receitas: Receita[] = [];
  public displayedColumns: string[] = [ 'nome', 'descricao', 'quantidadeIngredientes', 'valorIngredientes', 'acao' ];
  public receitasDataSource: MatTableDataSource<Receita> = new MatTableDataSource(this.receitas);

  constructor() { }

  ngOnInit(): void {
    this.receitasDataSource = new MatTableDataSource(this.receitas); 
  }

  public getValorTotal(ingredientes: IngredienteReceita[]) : number {
    var valorTotal: number = 0;
    ingredientes.forEach(
      (ingrediente: IngredienteReceita) => {
        valorTotal += ingrediente.valor;
      }
    );

    return valorTotal;
  }
}
