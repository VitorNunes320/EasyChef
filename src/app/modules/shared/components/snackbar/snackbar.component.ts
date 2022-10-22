import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarTheme } from "../../models/snackbar.theme.enum";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent {
  constructor(
    public snackBar: MatSnackBar,
    public translate: TranslateService
  ) {
    this.translate.use("pt-br");
  }

  public openSnackBar(
    message: string,
    theme: SnackBarTheme,
    duration?: number
  ): void {
    let theme_new: string;
    if (theme === SnackBarTheme.error) {
      theme_new = "error_new";
    } else if (theme === SnackBarTheme.success) {
      theme_new = "success_new";
    } else {
      theme_new = "default_new";
    }
    console.log(this.translate.instant(message));
    this.snackBar.open(this.translate.instant(message), "X", {
      duration: duration || 8000,
      panelClass: [theme_new],
    });
  }
}
