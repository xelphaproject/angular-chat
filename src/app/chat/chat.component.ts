import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../contacts';
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  initmsg = '';
  constructor(private router: Router) { }

  ngOnInit() {
      if(this.isLogged === false){
          this.router.navigate(['login-f']);
      }
  }
  title = 'Chat Room';
  contacts: Contact[] = [];
  events = [];
  contacts = CONTACTS;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  msg = ['Windstorm', 'Bombasto'];
  sendMsg(themsg: string){
    if(themsg){
      this.msg.push(themsg);

    }
  }
  logOut(){
    console.log('on chat ' + this.isLogged);
    this.isLogged = false;
    console.log('logged out ' + this.isLogged);
    this.router.navigate(['login-f']);
  }

}
