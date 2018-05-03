import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  errMsg = '';
  constructor(private router: Router) {}

  ngOnInit() {

  }
  validateInput(uname: string,pass: string){
      console.log('init ' + this.isLogged);
      if(uname === "test" && pass==="test"){
        this.isLogged = true;
        console.log('after v ' + this.isLogged);
        this.router.navigate(['chat']);
      }else{
        this.errMsg = 'Username and Password doesn\'t match!';
      }
  }


}
