import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';


@Injectable()

export class UserService {
  public url: string;
  public identity;
  public  token;

  constructor(private _http: HttpClient) {
    this.url = environment.apiBack;
  }

  singUp(user_to_login, gethash = null) {

    if (gethash != null) {
      user_to_login.gethash = gethash;
    }
    let json = JSON.stringify(user_to_login);
    let params = json;
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._http.post(this.url + '/login', params, {headers: headers}).pipe(map((res: HttpResponse<any>) => res));
  }

  register(userToRegister) {
    let json = JSON.stringify(userToRegister);
    let params = json;
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this._http.post(this.url + '/register', params, {headers: headers}).pipe(map((res: HttpResponse<any>) => res));
  }

  getIndentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != 'undefined'){
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }


  getToken() {
    let token = localStorage.getItem('token');
    if (token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
}


