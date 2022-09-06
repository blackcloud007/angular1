import { Component, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';

@Component({
  selector: 'app-visitor-register',
  templateUrl: './visitor-register.component.html',
  styleUrls: ['./visitor-register.component.css']
})
export class VisitorRegisterComponent implements OnInit {
v:Visitor=new Visitor();
visitors:Array<Visitor>=[];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitHandler(){
    this.visitors.push(this.v)
    this.v=new Visitor();

  }

}
