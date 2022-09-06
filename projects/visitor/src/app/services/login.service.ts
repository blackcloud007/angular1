import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {User} from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentStatus:string | null=null;
  constructor() { }
  validateLogin(u:User){
    if(u.username==="aravind" && u.password==="1234"){
      localStorage.setItem('status','loggedin')
    }
  }
  isLoggedIn():boolean{
    this.currentStatus=localStorage.getItem('status')
    if(this.currentStatus==null)
      return false;
    if(this.currentStatus==="loggedin")
      return true
    else
      return false;
    }
  }
