import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router:Router
  ) {}
  public user = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    mobileNumber: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.userName == '' || this.user.userName == null) {
      this._snackBar.open('Username is required', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
    }

    //validate

    //add user: userService
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        // alert('success');
        Swal.fire(
          'Successfully done !!',
          'Username is ' + data.userName,
          'success'
        );
        this.router.navigate(['login']);
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this._snackBar.open('Something went wrong !!', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
