import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Global } from './global';

@Injectable({providedIn: 'root'})

export class UserService {

  public url: string;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  // tslint:disable-next-line:variable-name
  singUp(user_to_login, gethash = null) {

    if (gethash != null) {
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this._http.post(this.url + '/login', params, {headers: headers}).pipe(map(res => res));
  }
}


