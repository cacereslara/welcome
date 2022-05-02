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
        title: "Microservicios de manera profesional",
        duration: "(60 hs)",
        subtitle: "Microservicios",
        items: [
          "Docker",
          "AWS",
          "Linux/Windows"
        ]
      },
      {
        title: "Angular de cero a experto",
        duration: "(50 hs)",
        subtitle: "Udemy",
        items: [
          "Componentes",
          "Modulos",
          "Directivas",
          "Pipes",
          "Etc"
        ]
      }
    ]
  }

  public getData(): Array<Info> {
    return [...this._courses];
  }
}
