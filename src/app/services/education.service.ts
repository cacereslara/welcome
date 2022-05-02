import { Injectable } from '@angular/core';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private _education: Array<Info> = [];

  constructor() {
    this._education = [
      {
        title: "Universidad de Buenos Aires",
        duration: "2019 - Today",
        subtitle: "Bachelor's degree in Computer Systems",
        items: []
      },
      {
        title: "Universidad de los Andes - (VE)",
        duration: "2014 - 2018",
        subtitle: "Systems Engineering (mid-career)",
        items: []
      }
    ]
  }

  public getData(): Array<Info> {
    return [...this._education];
  }
}
