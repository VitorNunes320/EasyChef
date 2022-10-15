import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { AutenticacaoModule } from "./modules/autenticacao/autenticacao.module";
import { SharedModule } from "./modules/shared/shared.module";
import { InicioModule } from "./modules/inicio/inicio.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { tokenInterceptorProviders } from "./modules/shared/services/token-interceptor.service";
import { SnackbarComponent } from "./modules/shared/components/snackbar/snackbar.component";
import { GuardService } from "./modules/shared/services/guard.service";
import { FormBuilder } from "@angular/forms";
import { PedidoModule } from "./modules/pedido/pedido.module";
import { PreparacaoModule } from "./modules/preparacao/preparacao.module";
import { RelatorioModule } from "./modules/relatorio/relatorio.module";
import { ReceitaModule } from "./modules/receita/receita.module";

@NgModule({
  declarations: [AppComponent, SnackbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    AutenticacaoModule,
    SharedModule,
    InicioModule,
    PedidoModule,
    PreparacaoModule,
    RelatorioModule,
    ReceitaModule,
  ],
  providers: [
    FormBuilder,
    SnackbarComponent,
    GuardService,
    tokenInterceptorProviders,
  ],
  exports: [SnackbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
