import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interfaces/info';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public education: Array<Info> = [];
  
  constructor(private service: EducationService) { }

  ngOnInit(): void {
    this.education = this.service.getData();
  }

}
