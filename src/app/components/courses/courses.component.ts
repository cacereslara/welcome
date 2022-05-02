import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interfaces/info';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Array<Info> = [];

  constructor(private service: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.service.getData();
  }

}
