import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) {

  }

  getArtist (): Observable <any> {
      debugger
      return this.http.get(`${environment.apiBack}/artists`)
    }

}
