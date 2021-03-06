import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name','category'];

  constructor( private coursesService: CoursesService ) {
    
    this.courses = coursesService.list();
   }

  ngOnInit(): void {
  }

}
