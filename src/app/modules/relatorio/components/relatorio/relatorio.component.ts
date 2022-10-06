import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../../services/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  constructor(
    private readonly relatorioService: RelatorioService
    ) { }

  ngOnInit(): void {
  }

}
