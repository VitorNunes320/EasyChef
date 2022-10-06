import { Component, OnInit } from '@angular/core';
import { PreparacaoService } from '../../service/preparacao.service';

@Component({
  selector: 'app-preparacao',
  templateUrl: './preparacao.component.html',
  styleUrls: ['./preparacao.component.scss']
})
export class PreparacaoComponent implements OnInit {

  constructor(
    private readonly preparacaoService: PreparacaoService
    ) { }

  ngOnInit(): void {
  }

}
