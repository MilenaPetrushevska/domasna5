import { Component, ConstructorSansProvider, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, suzi } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  constructor(){}

  @Input()
  title:string = "";

  @Input()
  crs:Course = suzi;

  @Input()
  index:number = 0;

  @Output()
  view = new EventEmitter<Course>();

  ngOnInit(){}

  onCrsViewed(){
    console.log("Course category:")
    this.view.emit(this.crs)
  }

  classes(){
    if (this.crs.category == 'BEGINNER') {
      return ['beginner'];
    }
    if (this.crs.category == 'ADVANCED') {
      return ['advanced'];
    }
    if (this.crs.category == 'INTERMEDIATE') {
      return ['intermediate'];
    }
    else
      return 'course-card' 
  }
}
