import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { FluxoCaixaComponent } from './components/fluxo-caixa/fluxo-caixa.component';



@NgModule({
  declarations: [
    FinanceiroComponent,
    FaturamentoComponent,
    FluxoCaixaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FinanceiroModule { }
