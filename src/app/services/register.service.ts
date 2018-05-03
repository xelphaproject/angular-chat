import { Injectable } from '@angular/core';
import {Http, Headers,Response,RequestOptions} from '@angular/http';
import {RegisterService} from '../services/register.service';

@Injectable()
export class RegisterService {
//url: string="http://192.168.24.17:8000/auth/users/create/";
  constructor(){}


  new_user(user:any){

    let url='${this.url}/post';

    let headers = new Headers({
      'Content-Type': 'application/json',
      // 'Authorization': 'token' + localStorage.getItem("token") ;
    })

    return this.http.post(url, "",{headers:headers}).subscribe(res=>console.log(res.json()));
  }
  login_user(credentials:any){

    let url = '192.168.24.17:8000';
    let headers = new Headers({
      'Content-Type': 'application/json',
      // 'Authorization': 'token' + localStorage.getItem("token") ;
    })

    return this.http.post(url, {headers:headers}).map(response=> response.json());
  }

  logout(){
    localStorage.removeItem('token');
  }
}
