import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {


public child="something from child to parent."
public message="";
  constructor() { }

  ngOnInit(): void {
  }
  @Input('parentDATA') public name;
  @Output() public fromChild = new EventEmitter();

  fire(){
    this.fromChild.emit("hello from child");
  }
}


