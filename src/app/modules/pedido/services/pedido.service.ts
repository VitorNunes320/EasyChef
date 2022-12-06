import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseBase } from "../../shared/models/response-base.model";
import { Mesa } from "../models/mesa.model";

@Injectable({
  providedIn: "root",
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  public getPedidos(
    busca: string,
    pagina: number,
    quantidade: number
  ): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(
      `${environment.baseURL}Pedido/Lista?` +
        (busca ? `busca=${busca}&` : ``) +
        `pagina=${pagina}&quantidade=${quantidade}`
    );
  }

  public getMesas(
    busca: string,
    pagina: number,
    quantidade: number
  ): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(
      `${environment.baseURL}Mesa/Lista?` +
        (busca ? `busca=${busca}&` : ``) +
        `pagina=${pagina}&quantidade=${quantidade}`
    );
  }

  public addMesa(model: Mesa): Observable<ResponseBase> {
    return this.http.post<ResponseBase>(`${environment.baseURL}Mesa`, model);
  }
}
