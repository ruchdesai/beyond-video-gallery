import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  API_URL: string = environment.YOUTUBE_API_URL;

  getVideos(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
