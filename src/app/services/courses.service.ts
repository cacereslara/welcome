import { Injectable } from '@angular/core';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _courses: Array<Info> = [];

  constructor() {
    this._courses = [
      {
        title: "Microservices: The Professional Way",
        duration: "(60 hs)",
        subtitle: "MUG",
        items: [
          "Architecture Patterns for Microservices",
          "Cloud Native Patterns (12 factor apps)",
          "DevOps",
          "Docker, Kubernetes and OpenShift."
        ]
      },
      {
        title: "Angular: Zero to Expert",
        duration: "(50 hs)",
        subtitle: "Udemy",
        items: [
          "Components, Directives, Services",
          "Modules, Pipes",
          "Use of third-party libraries written in Angular",
          "Route protection, Authentication using JsonWebTokens",
          "API"
        ]
      }
    ]
  }

  public getData(): Array<Info> {
    return [...this._courses];
  }
}
