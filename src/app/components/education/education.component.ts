import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interfaces/info';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public education: Array<Info> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
