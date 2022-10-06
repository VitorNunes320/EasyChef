import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBase } from '../../shared/models/response-base.model';

@Injectable({
  providedIn: 'root'
})
export class PreparacaoService {

  constructor(private http: HttpClient) { }

  public getPreparacoes(busca: string, pagina: number, quantidade: number): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(`${environment.baseURL}Preparacao?` + 
    (busca ? `busca=${busca}&` : ``) +
    `pagina=${pagina}&quantidade=${quantidade}`);
  }
}
