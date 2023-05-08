import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileService } from '../service/file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  files: File[] = [];

  private progressSubscription: Subscription;

  progress$ = this.fileService._progress.asObservable();

  over: boolean;
  error: string;
  succes: string;

  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  constructor(private fileService: FileService, private router: Router) {}

  openFile() {
    this.fileInput.nativeElement.click();
  }

  clear() {
    if (this.succes) {
      this.error = '';
      this.succes = '';
    }
  }

  onFilesSelected(event: Event) {
    this.addFiles((event.target as HTMLInputElement).files);
    this.clear();
  }

  addFiles(fileList: FileList) {
    for (let i = 0; i < fileList.length; i++) {
      this.files.push(fileList.item(i));
    }
  }

  remove(index) {
    this.files.splice(this.files.indexOf(index), 1);
  }

  dropFiles($event) {
    const files = $event.dataTransfer.files;
    this.addFiles(files);
  }

  valider() {
    this.fileService.uploadMultiFile(this.files).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (err) => {
        this.error = err.error;
      },
      complete: () => {
        this.error = '';
        this.files = [];
        this.succes = 'fichiers envoyés avec succes';
      },
    });
  }

  uploadAll() {
    this.fileService
      .uploadMultipleWithProgressBar(this.files)

      .subscribe({
        next: (file) => {
          console.log(file);
        },
        error: (err) => {
          this.error = err.error;
        },
        complete: () => {
          this.error = '';
          this.files = [];
          this.succes = 'fichiers envoyés avec succes';

          // this.router.navigate(['/']);
        },
      })

  }

}
