import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]

})
export class LoginComponent implements OnInit {
  public user: User;
  public identity;
  public token;
  public errorMessage;

  constructor(private _userService: UserService) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit(): void {
    this.identity = this._userService.getIndentity();
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token);
  }

  public onSubmit() {
    console.log(this.user);
    // Conseguir los datos del usuario identificado
    let dataRegister:any = {};
    let dataError:any = {};
    this._userService.singUp(this.user).subscribe(
      (res) => {
        dataRegister = res;
        let identity = dataRegister.user;
        this.identity = identity;

        if (!this.identity._id) {
          alert('User not identified');
        } else {
          // Crear elemento en el localstorage para tener al usuario en sesión
          localStorage.setItem('identity', JSON.stringify(identity));

          // Conseguir el token para enviarselos a cada peticion http
          let dataRegister:any = {};
          let dataError:any = {};
          this._userService.singUp(this.user, 'true').subscribe(
            (res) => {
              dataRegister = res;
              let token = dataRegister.token;
              this.token = token;

              if (this.token.length <= 0) {
                alert('Token not generated');
              } else {
                // Crear elemento en el localstorage para tener token disponible
                localStorage.setItem('token', token);
                this.user = new User('', '', '', '', '', 'ROLE_USER', '');
              }
            },
            error => {
              dataError = error;
              var errorMessage = <any>error;
              if (errorMessage != null) {
                this.errorMessage = dataError.error.message;
                console.log(error);
              }
            }
          );
          // Conseguir token para enviarselo a cada peticion http
        }

      },
      error => {
        dataError = error;
        var errorMessage = <any>error;
        if (errorMessage != null) {
          this.errorMessage = dataError.error.message;
          console.log(error);
        }
      }
    );
  }

}
