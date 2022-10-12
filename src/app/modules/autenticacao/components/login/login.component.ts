import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseStatus } from 'src/app/modules/shared/models/response-status.const';
import { Login } from '../../models/login.model';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { StorageService } from '../../services/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { SnackbarComponent } from 'src/app/modules/shared/components/snackbar/snackbar.component';
import { SnackBarTheme } from 'src/app/modules/shared/models/snackbar.theme.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public erro: boolean = false;
  public mensagemErro: string = "";
  public loading: boolean = false;
  public esconderSenha: boolean = true;
  public loginData: Login = <Login>{};

  public loginForm: FormGroup = this._formBuilder.group({
		email: [""],
		senha: [""],
    lembreDeMim: [false]
	});

  constructor(
    private readonly _formBuilder: FormBuilder, 
    private autenticacaoService: AutenticacaoService, 
    private storageService: StorageService,
    private readonly snackbarComponent: SnackbarComponent, 
    private readonly router: Router,
    private translate: TranslateService) {
    this.translate.use("pt-br");
  }

  ngOnInit(): void {
  }

  public doLogin(): void {

    if (!this.loginForm.valid) {
      this.erro = true;
      this.mensagemErro = "usuarioSenhaInvalidos";
      return;
    }

    this.loading = true;
    this.loginData = this.loginForm.value;
    this.autenticacaoService.doLogin(this.loginData).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status != ResponseStatus.Sucesso) {
         
        } else {
          this.erro = false;
          this.mensagemErro = "";
          if (response.dados) {
            this.storageService.salvarUsuario(response.dados, this.loginData.lembreDeMim);
            this.router.navigate(['/dashboard']);
            this.snackbarComponent.openSnackBar(response.mensagem, SnackBarTheme.success, 3000);
          }
        }
      },
      error: (response) => {
        this.loading = false;
        this.erro = true;
        this.mensagemErro = response.error.mensagem;
      }
    });
  }
}
