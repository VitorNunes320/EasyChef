import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreparacaoComponent } from './components/preparacao/preparacao.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../shared/services/http-loader.service';
import { HttpClient } from '@angular/common/http';
import { DetalhesPreparacaoModalComponent } from './components/modals/detalhes-preparacao-modal/detalhes-preparacao-modal.component';


@NgModule({
  declarations: [
    PreparacaoComponent,
    DetalhesPreparacaoModalComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
  ]
})
export class PreparacaoModule { }
