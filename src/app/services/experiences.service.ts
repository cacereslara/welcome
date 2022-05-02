import { Injectable } from '@angular/core';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private _experiences: Array<Info> = [];

  constructor() {
    this._experiences = [
      {
        title: "Axoft Argentina",
        duration: "2018 - Today",
        subtitle: "Software developer",
        items: [
          "Maximized application's efficiency, data quality, scope, operability, and flexibility.",
          "Used various ideas from distributed computing, large-scale design, real-time data processing, data storage, ML, and AI to solve challenging dataset problems.",
          "Managed, optimized, and updated PHP databases as necessary.",
          "Developed app integration with REST / SOAP and other APIs for Google Maps, social media logins, payment processors, and other services."
        ]
      }
    ]
  }

  public getData(): Array<Info> {
    return [...this._experiences];
  }
}
