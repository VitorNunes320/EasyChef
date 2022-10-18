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
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    MenuComponent,
    AuthTemplateComponent,
    DefaultTemplateComponent,
    SeletorImagemComponent,
    UploadDirective,
    PaginatorComponent,
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
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [SeletorImagemComponent, PaginatorComponent],
  exports: [SeletorImagemComponent, PaginatorComponent],
})
export class SharedModule {}
