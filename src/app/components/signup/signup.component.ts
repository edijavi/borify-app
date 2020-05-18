import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  public title = 'BORIFY';
  public userRegister: User;
  public alertRegister;


  constructor(private _userService: UserService) {
    this.userRegister = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit(): void {
  }

  onSubmitRegister() {
    console.log(this.userRegister);

    let dataRegister:any = {};
    let dataError:any = {};
    this._userService.register(this.userRegister).subscribe(
      (res) => {
        dataRegister = res;
        let user = dataRegister.user;
        this.userRegister = user;

        if (!user._id){
          this.alertRegister = 'Error in the registration process';
        } else {
          this.alertRegister = `Registration with success, login with ${this.userRegister.email}`;
          this.userRegister = new User('', '', '', '', '', 'ROLE_USER', '');


        }
      },
      error => {
        dataError = error;
        var alertRegister = <any>error;
        if (alertRegister != null) {
          this.alertRegister = dataError.error.message;
          console.log(error);
        }
      }
    );
  }

}
