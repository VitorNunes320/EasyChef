import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./components/menu/menu.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { routes } from "src/app/app-routing.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AuthTemplateComponent } from "./components/auth-template/auth-template.component";
import { DefaultTemplateComponent } from "./components/default-template/default-template.component";
import { MatMenuModule } from "@angular/material/menu";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../shared/services/http-loader.service";
import { HttpClient } from "@angular/common/http";
import { SeletorImagemComponent } from "./components/seletor-imagem/seletor-imagem.component";
import { UploadDirective } from "./diretivas/drag-and-drop.directive";

@NgModule({
  declarations: [
    MenuComponent,
    AuthTemplateComponent,
    DefaultTemplateComponent,
    SeletorImagemComponent,
    UploadDirective,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatMenuModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [SeletorImagemComponent],
  exports: [SeletorImagemComponent],
})
export class SharedModule {}
