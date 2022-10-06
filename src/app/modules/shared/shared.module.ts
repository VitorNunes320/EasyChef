import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthTemplateComponent } from './components/auth-template/auth-template.component';
import { DefaultTemplateComponent } from './components/default-template/default-template.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    MenuComponent,
    AuthTemplateComponent,
    DefaultTemplateComponent
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
  ],
})
export class SharedModule { }
