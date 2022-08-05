import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  //get current user: which is logged in
  getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token
  generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login user:set token in localStorage
  loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //isLogin: user is logged in or not
  isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (/*tokenStr != undefined || tokenStr != '' ||*/ tokenStr != null) {
      return true;
    } else {
      return false;
    }
  }

  //logout: remove token from local Storage
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('articles');
    //localStorage.removeItem('user');
    return true;
  }

  //get token
  getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user
  getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get user role
  getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
