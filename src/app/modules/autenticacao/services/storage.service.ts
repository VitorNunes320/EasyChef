import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AES, enc } from 'crypto-ts';
import { environment } from 'src/environments/environment';
import { UsuarioToken } from '../models/token-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public usuario: UsuarioToken = <UsuarioToken>{};
  public lembreDeMim: boolean = false;

  constructor(private router: Router) { }

  public salvarUsuario(usuarioToken: UsuarioToken, lembreDeMim?: boolean): void {

    this.usuario = usuarioToken;
    this.lembreDeMim = lembreDeMim != null ? lembreDeMim : this.lembreDeMim;
    if (this.lembreDeMim) {
      localStorage.setItem('usuarioId', AES.encrypt(usuarioToken.id, environment.key).toString());
      localStorage.setItem('nome', AES.encrypt(usuarioToken.nome, environment.key).toString());
      localStorage.setItem('foto', AES.encrypt(usuarioToken.foto, environment.key).toString());
      localStorage.setItem('token', AES.encrypt(usuarioToken.tokens.token, environment.key).toString());
      localStorage.setItem('refreshToken', AES.encrypt(usuarioToken.tokens.refreshToken, environment.key).toString());
    } else {
      localStorage.clear();
      sessionStorage.setItem('usuarioId', AES.encrypt(usuarioToken.id, environment.key).toString());
      sessionStorage.setItem('nome', AES.encrypt(usuarioToken.nome, environment.key).toString());
      sessionStorage.setItem('foto', AES.encrypt(usuarioToken.foto, environment.key).toString());
      sessionStorage.setItem('token', AES.encrypt(usuarioToken.tokens.token, environment.key).toString());
      sessionStorage.setItem('refreshToken', AES.encrypt(usuarioToken.tokens.refreshToken, environment.key).toString());
    }
  }

  public getTokenId() : string | null{
    if (localStorage.getItem("token") != null) {
      return AES.decrypt(localStorage.getItem("token") as string, environment.key).toString(enc.Utf8);
    } else if (sessionStorage.getItem("token")) {
      return AES.decrypt(sessionStorage.getItem("token") as string, environment.key).toString(enc.Utf8);
    } else {
      return null;
    }
  }

  public getNome() : string | null {
    if (localStorage.getItem("nome")) {
      return AES.decrypt(localStorage.getItem("nome") as string, environment.key).toString(enc.Utf8);
    } else if (sessionStorage.getItem("nome")) {
      return AES.decrypt(sessionStorage.getItem("nome") as string, environment.key).toString(enc.Utf8);
    } else {
      return null;
    }
  }

  public getUsuarioId() : string {
    if (localStorage.getItem("usuarioId")) {
      return AES.decrypt(localStorage.getItem("usuarioId") as string, environment.key).toString(enc.Utf8);
    } else if (sessionStorage.getItem("usuarioId")) {
      return AES.decrypt(sessionStorage.getItem("usuarioId") as string, environment.key).toString(enc.Utf8);
    } else {
      return "";
    }
  }

  public logout() : void {
    localStorage.clear();
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
