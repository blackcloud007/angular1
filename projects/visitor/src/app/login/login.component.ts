import { Component, OnInit } from '@angular/core';

import { User } from '../entities/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u:User=new User();
  constructor(private ls:LoginService) { }

  ngOnInit(): void {
    
  }

  LoginHandler(){
    this.ls.validateLogin(this.u);
  }

}
