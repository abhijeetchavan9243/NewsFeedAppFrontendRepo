import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginData = {
    userName: '',
    password: '',
  };

  constructor(
    private _snackBar: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.login.isLoggedIn()){
      this.router.navigate(['user-dashboard/']);
    }
  }

  formSubmit() {
    console.log('Login button clicked');

    //validate
    if (
      this.loginData.userName.trim() == '' ||
      this.loginData.userName == null
    ) {
      this._snackBar.open('Username is required !!', '', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login..
        this.login.loginUser(data.token);
        //this.router.navigate(['user-dashboard']);

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);
          //redirect to USER dashboard
          if (this.login.getUserRole() == 'USER') {
            //user dashboard
            this.router.navigate(['user-dashboard']);
            //window.location.href='/user-dashboard'
          } else {
            this.login.logout();
          }
        });
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this._snackBar.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }
}
