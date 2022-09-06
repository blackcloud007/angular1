import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private r:Router,private ls:LoginService) { }
  isLogged:boolean=false;
  ngOnInit(): void {
    //this.isLogged=localStorage.getItem('status')==='loggedin';
    this.isLogged=this.ls.isLoggedIn();
  }
  LoginHandler(){
    this.r.navigate(['login']);
  }
  RegisterHandler(){
    this.r.navigate(['register']);
  }
  LogoutHandler(){
    localStorage.clear();
  }
}