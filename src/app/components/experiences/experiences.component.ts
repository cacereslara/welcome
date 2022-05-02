import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interfaces/info';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public experiences: Array<Info> = []

  constructor(private service: ExperiencesService) { }

  ngOnInit(): void {
    this.experiences = this.service.getData();
  }

}
