import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReceitaComponent } from "./components/receita/receita.component";
import { IngredientesComponent } from "./components/ingredientes/ingredientes.component";
import { NovaReceitaModalComponent } from "./components/modals/nova-receita-modal/nova-receita-modal.component";
import { NovoIngredienteModalComponent } from "./components/modals/novo-ingrediente-modal/novo-ingrediente-modal.component";
import { IngredientesTabelaComponent } from "./components/ingredientes-tabela/ingredientes-tabela.component";

import { HttpLoaderFactory } from "../shared/services/http-loader.service";
import { HttpClient } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { IngredientesCardComponent } from "./components/ingredientes-card/ingredientes-card.component";
import { ReceitaTabelaComponent } from "./components/receita-tabela/receita-tabela.component";
import { ReceitaCardComponent } from "./components/receita-card/receita-card.component";
import { SharedModule } from "../shared/shared.module";
import { MatDialogModule } from "@angular/material/dialog";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [
    ReceitaComponent,
    IngredientesComponent,
    IngredientesTabelaComponent,
    IngredientesCardComponent,
    ReceitaTabelaComponent,
    ReceitaCardComponent,
    NovaReceitaModalComponent,
    NovoIngredienteModalComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonToggleModule,
    SharedModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class ReceitaModule {}
