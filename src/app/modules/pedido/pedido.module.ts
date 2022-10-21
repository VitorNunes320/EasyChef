import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PedidosComponent } from "./components/pedidos/pedidos.component";
import { PedidosCardComponent } from "./components/pedidos-card/pedidos-card.component";
import { PedidosTabelaComponent } from "./components/pedidos-tabela/pedidos-tabela.component";
import { NovoPedidoModalComponent } from "./components/modals/novo-pedido-modal/novo-pedido-modal.component";
import { DetalhesPedidoModalComponent } from "./components/modals/detalhes-pedido-modal/detalhes-pedido-modal.component";

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
import { MesasComponent } from "./components/mesas/mesas.component";
import { MesasCardComponent } from "./components/mesas-card/mesas-card.component";
import { MesasTabelaComponent } from "./components/mesas-tabela/mesas-tabela.component";
import { SharedModule } from "../shared/shared.module";
import { MatDialogModule } from "@angular/material/dialog";
import { NovaMesaModalComponent } from "./components/modals/nova-mesa-modal/nova-mesa-modal.component";

@NgModule({
  declarations: [
    PedidosComponent,
    PedidosCardComponent,
    PedidosTabelaComponent,
    NovoPedidoModalComponent,
    DetalhesPedidoModalComponent,
    MesasComponent,
    MesasCardComponent,
    MesasTabelaComponent,
    NovaMesaModalComponent,
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
export class PedidoModule {}
