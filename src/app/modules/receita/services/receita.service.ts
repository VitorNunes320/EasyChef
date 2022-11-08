import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseBase } from "../../shared/models/response-base.model";

@Injectable({
  providedIn: "root",
})
export class ReceitaService {
  constructor(private http: HttpClient) {}

  public getReceitas(
    busca: string,
    pagina: number,
    quantidade: number
  ): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(
      `${environment.baseURL}Receita/Lista?` +
        (busca ? `busca=${busca}&` : ``) +
        `pagina=${pagina}&quantidade=${quantidade}`
    );
  }

  public getIngredientes(
    busca: string,
    pagina: number,
    quantidade: number
  ): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(
      `${environment.baseURL}Ingrediente/Lista?` +
        (busca ? `busca=${busca}&` : ``) +
        `pagina=${pagina}&quantidade=${quantidade}`
    );
  }

  public getUnidadesMedidas(
    busca: string,
    pagina: number,
    quantidade: number
  ): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(
      `${environment.baseURL}UnidadeMedida/Lista?` +
        (busca ? `busca=${busca}&` : ``) +
        `pagina=${pagina}&quantidade=${quantidade}`
    );
  }
}
