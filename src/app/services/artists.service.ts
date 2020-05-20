import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Artist } from '../models/artist';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() {

  }


  getArtist () {}

}
