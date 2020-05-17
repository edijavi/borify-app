import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';

// import { Hash } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  public title = 'BORIFY';
  public user: User;
  public identity;
  public token;
  public errorMessage;


  constructor(private _userService: UserService) {
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {

  }

  public onSubmit() {
    console.log(this.user);
    //Conseguir los datos del usuario identificado
    this._userService.singUp(this.user).subscribe(
      response => {
        let identity = response;
        this.identity = identity;

        if (!this.identity._id) {
          alert('El usuario no está correctamente identificado');
        } else {
          //Crear elemento en el localstorage para tener al usuario en sesión
          this._userService.singUp(this.user, 'true').subscribe(
            response => {
              let token = response;
              this.token = token;

              if (this.token.length <= 0) {
                alert('El token no ha se ha generado');
              } else {
                //Crear elemento en el localstorage para tener token disponible
                console.log(token);
                console.log(identity);
              }
            },
            error => {
              var errorMessage = <any>error;
              if (errorMessage != null) {
                this.errorMessage = error.statusText;
                console.log(error);
              }
            });

          //Conseguir token para enviarselo a cada peticion http
        }

      },
      error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          this.errorMessage = error.statusText;
          console.log(error);
        }
      });
  }
}
