import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseBase } from '../../shared/models/response-base.model';
import { Login } from '../models/login.model';
import { EsqueciSenha } from '../models/esqueci-senha.model';
import { AlterarSenha } from '../models/alterar-senha.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  public doLogin(request: Login): Observable<ResponseBase> {
    return this.http.post<ResponseBase>(`${environment.baseURL}Autenticacao/Login`, request);
  }

  public confirmarLogin(codigo: string): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(`${environment.baseURL}Autenticacao/ConfirmarLogin/${codigo}`);
  }

  public doEsqueciSenha(email: string): Observable<ResponseBase> {
    return this.http.get<ResponseBase>(`${environment.baseURL}Autenticacao/EsqueciSenha/${email}`);
  }

  public alterarSenha(request: AlterarSenha) : Observable<ResponseBase> {
    return this.http.post<ResponseBase>(`${environment.baseURL}Autenticacao/AlterarSenha`, request);
  }

  public redefinirSenha(request: EsqueciSenha) : Observable<ResponseBase> {
    return this.http.post<ResponseBase>(`${environment.baseURL}Autenticacao/RedefinirSenha`, request);
  }

  public definirAutenticacaoDoisFatores(ativar: boolean) : Observable<ResponseBase> {
    return this.http.get<ResponseBase>(`${environment.baseURL}Autenticacao/AutenticacaoDuasEtapas?ativar=${ativar}`);
  }
}
