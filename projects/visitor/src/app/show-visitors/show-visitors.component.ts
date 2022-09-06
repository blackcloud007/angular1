import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from '../entities/visitor';

@Component({
  selector: 'app-show-visitors',
  templateUrl: './show-visitors.component.html',
  styleUrls: ['./show-visitors.component.css']
})
export class ShowVisitorsComponent implements OnInit {

  @Input() visitors:Array<Visitor>=[];
  @Input() message:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
