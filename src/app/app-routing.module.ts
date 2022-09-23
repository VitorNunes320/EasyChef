import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/components/login/login.component';
import { RegistroComponent } from './autenticacao/components/registro/registro.component';
import { MenuComponent } from './shared/components/menu/menu.component';

export const routes: Routes = [

  { path: '', component: MenuComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
