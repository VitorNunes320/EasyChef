import { Component, OnInit } from '@angular/core';
import { Preparacao } from '../../models/preparacao.model';
import { PreparacaoService } from '../../service/preparacao.service';

@Component({
  selector: 'app-preparacao',
  templateUrl: './preparacao.component.html',
  styleUrls: ['./preparacao.component.scss']
})
export class PreparacaoComponent implements OnInit {
  public preparacao: Preparacao[] = [
    { id: '1', codigo: '1', status: 0, mesaId: '1', mesaNome: 'Mesa 01', data: new Date(), itens: [{ id: '1', foto: '', nome: 'Hamburguer'}], observacoes: 'Sem cebola'},
    { id: '2', codigo: '2', status: 1, mesaId: '2', mesaNome: 'Mesa 02', data: new Date(), itens: [
      { id: '1', foto: '', nome: 'Hamburguer'},
      { id: '1', foto: '', nome: 'Hamburguer'},
      { id: '1', foto: '', nome: 'Hamburguer'},
      { id: '1', foto: '', nome: 'Hamburguer'},
    ], observacoes: 'Sem cebola'},
    { id: '3', codigo: '3', status: 2, mesaId: '3', mesaNome: 'Mesa 03', data: new Date(), itens: [{ id: '1', foto: '', nome: 'Hamburguer'}], observacoes: 'Sem cebola'},
    { id: '4', codigo: '4', status: 3, mesaId: '4', mesaNome: 'Mesa 04', data: new Date(), itens: [{ id: '1', foto: '', nome: 'Hamburguer'}], observacoes: 'Sem cebola'},
    { id: '4', codigo: '4', status: 3, mesaId: '4', mesaNome: 'Mesa 04', data: new Date(), itens: [{ id: '1', foto: '', nome: 'Hamburguer'}], observacoes: 'Sem cebola'},
    { id: '4', codigo: '4', status: 3, mesaId: '4', mesaNome: 'Mesa 04', data: new Date(), itens: [{ id: '1', foto: '', nome: 'Hamburguer'}], observacoes: 'Sem cebola'},
    { id: '4', codigo: '4', status: 3, mesaId: '4', mesaNome: 'Mesa 04', data: new Date(), itens: [{ id: '1', foto: '', nome: 'Hamburguer'}], observacoes: 'Sem cebola'},
    { id: '4', codigo: '4', status: 3, mesaId: '4', mesaNome: 'Mesa 04', data: new Date(), itens: [{ id: '1', foto: '', nome: 'Hamburguer'}], observacoes: 'Sem cebola'},
  ];
  
  constructor(
    private readonly preparacaoService: PreparacaoService
    ) { }

  ngOnInit(): void {
  }

}
