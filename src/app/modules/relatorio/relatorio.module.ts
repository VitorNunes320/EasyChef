import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatorioPedidosComponent } from "./components/relatorio-pedidos/relatorio-pedidos.component";
import { RelatorioPedidosCardComponent } from "./components/relatorio-pedidos-card/relatorio-pedidos-card.component";
import { RelatorioPedidosTabelaComponent } from "./components/relatorio-pedidos-tabela/relatorio-pedidos-tabela.component";
import { HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialogModule } from "@angular/material/dialog";
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
    RelatorioPedidosComponent,
    RelatorioPedidosCardComponent,
    RelatorioPedidosTabelaComponent,
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class RelatorioModule {}
