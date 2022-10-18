import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-auth-template",
  templateUrl: "./auth-template.component.html",
  styleUrls: [
    "./auth-template.component.scss",
    "../default-template/default-template.component.scss",
  ],
})
export class AuthTemplateComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.use("pt-br");
  }

  ngOnInit(): void {}
}
