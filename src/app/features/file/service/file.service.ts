import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  _progress = new BehaviorSubject<number>(0);

  private apiUrl = 'http://localhost:8080/api/files';

  constructor(private httpClient: HttpClient) { }

  updateProgress(progress: number) {
    this._progress.next(progress);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post(this.apiUrl, formData);
  }

  uploadMultiFile(files: File[]): Observable<any> {
    const formData = new FormData();

    files.forEach( f => {
      formData.append('files', f);
    })

    return this.httpClient.post(`${this.apiUrl}/multiple`, formData);
  }

  uploadMultipleWithProgressBar(files: File[]): Observable<any> {
    const formData = new FormData();

    files.forEach( f => {
      formData.append('files', f);
    })

    const req = new HttpRequest('POST', `${this.apiUrl}/multiple`, formData, {
      reportProgress: true,
    })

    return this.httpClient.request(req)
    .pipe(
      map((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent: {
              this.updateProgress(0);
              break;
            }
            case HttpEventType.UploadProgress: {
              this.updateProgress(Math.round(event.loaded / event.total * 100));
              break;
            }
            case HttpEventType.Response : {
              this.updateProgress(100);
              break;
            }
            default: {
              this.updateProgress(0);
              break;
            }
          }

      })
    )

  }



}
