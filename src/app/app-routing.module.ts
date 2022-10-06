import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/autenticacao/components/login/login.component';
import { RegistroComponent } from './modules/autenticacao/components/registro/registro.component';
import { DashboardComponent } from './modules/inicio/components/dashboard/dashboard.component';
import { LandingComponent } from './modules/inicio/components/landing/landing.component';
import { AuthTemplateComponent } from './modules/shared/components/auth-template/auth-template.component';
import { DefaultTemplateComponent } from './modules/shared/components/default-template/default-template.component';
import { MenuComponent } from './modules/shared/components/menu/menu.component';

export const routes: Routes = [

  { path: '', component: AuthTemplateComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'landing', component: LandingComponent },
    ]
  },
  { path: '', component: DefaultTemplateComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
