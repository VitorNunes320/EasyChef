import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-seletor-imagem",
  templateUrl: "./seletor-imagem.component.html",
  styleUrls: ["./seletor-imagem.component.scss"],
})
export class SeletorImagemComponent implements OnInit {
  public file: File | null = null;
  public imagem: string = "";
  @Output() fileEvent = new EventEmitter<File | null>();

  constructor() {}

  ngOnInit(): void {}

  public addFile(value: File | null) {
    this.fileEvent.emit(value);
  }

  public onUploadFiles(event: any) {
    if (event.detail) {
      this.file = event.detail.files[0];
    } else {
      this.file = event.target.files[0];
    }

    const reader = new FileReader();
    if (this.file) {
      this.addFile(this.file);
      reader.readAsDataURL(this.file);

      reader.onload = () => {
        this.imagem = reader.result as string;
      };
    }
  }

  public formatBytes(bytes: number) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  public removeFile(): void {
    this.file = null;
    this.imagem = "";
    this.addFile(null);
  }
}
