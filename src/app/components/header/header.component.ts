import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  private scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
  }

  ngOnInit(): void {
  }

  public scrollToCourses(): void {
    this.scrollTo('courses');
  }

  public scrollToEducation(): void {
    this.scrollTo('education');
  }

  public scrollToExperiences(): void {
    this.scrollTo('experiences');
  }
}
