import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interfaces/info';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public experiences: Array<Info> = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
