import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { Rights } from 'src/app/models/rights.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
  }

  isAuth(){
  	return this.getCurrentUser() != null;
  }
  haveRight(right: Rights){
    let user = this.getCurrentUser();
    return user != null && user.right == right;
  }
  login(data){
    return this.http.post<any>(environment.baseUrl + environment.path.login, data)
            .pipe(map(jwtRes => {
                if (jwtRes && jwtRes.token) {
                    localStorage.setItem('token', jwtRes.token);
                }
                return jwtRes;
            }));
  }

  logout(){
		localStorage.removeItem('token');
  }

  getUserName(){
    let user = this.getCurrentUser();
    return user ? user.lastName + " " + user.firstName : null;
  }
  getCurrentUser(){
    let token = this.getCurrentToken();
    if(token){
      let jwtUser = this.getDecodedAccessToken(token);
      return jwtUser.user;
    }
    return null;
  }
  getCurrentToken(){
  	return localStorage.getItem('token');
  }
  setSessionData(key: string, value: string){
    let sessionData =  JSON.parse(localStorage.getItem('sessionData'));
    if(sessionData == null){
      sessionData = {};
    }
    sessionData[key] = value;
    localStorage.setItem('sessionData', JSON.stringify(sessionData));
  }
  getSessionData(key: string){
    let sessionData =  JSON.parse(localStorage.getItem('sessionData'));
    if(sessionData != null){
      return sessionData[key];
    }
    return null;
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}
