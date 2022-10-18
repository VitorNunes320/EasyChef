import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InventarioComponent } from "./components/inventario/inventario.component";
import { HttpClient } from "@angular/common/http";

import { InventarioCardComponent } from "./components/inventario-card/inventario-card.component";
import { InventarioTabelaComponent } from "./components/inventario-tabela/inventario-tabela.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { HttpLoaderFactory } from "../shared/services/http-loader.service";
import { SharedModule } from "../shared/shared.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

@NgModule({
  declarations: [
    InventarioComponent,
    InventarioCardComponent,
    InventarioTabelaComponent,
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class InventarioModule {}
