import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './components/inventario/inventario.component';
import { EstoqueSegurancaComponent } from './components/estoque-seguranca/estoque-seguranca.component';
import { HttpClient } from '@angular/common/http';
import { ResponseBase } from '../shared/models/response-base.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    InventarioComponent,
    EstoqueSegurancaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule {
  constructor(private http: HttpClient) { }

  public getInventario(busca: string, pagina: number, quantidade: number): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(`${environment.baseURL}Iventario?` + 
    (busca ? `busca=${busca}&` : ``) +
    `pagina=${pagina}&quantidade=${quantidade}`);
  }
}
