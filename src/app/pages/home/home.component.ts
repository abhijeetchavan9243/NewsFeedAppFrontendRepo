import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private login:LoginService, private router:Router) { }

  ngOnInit(): void {
    if(this.login.isLoggedIn()){
      this.router.navigate(['user-dashboard/']);
    }
  }

}
