import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitaComponent } from './components/receita/receita.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { NovaReceitaModalComponent } from './components/modals/nova-receita-modal/nova-receita-modal.component';
import { NovoIngredienteModalComponent } from './components/modals/novo-ingrediente-modal/novo-ingrediente-modal.component';



@NgModule({
  declarations: [
    ReceitaComponent,
    IngredientesComponent,
    NovaReceitaModalComponent,
    NovoIngredienteModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceitaModule { }
