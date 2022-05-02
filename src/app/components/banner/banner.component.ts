import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public imgSrc: string = environment.bannerPath;
  public resumeSrc: string = environment.resumePath;

  constructor() { }

  ngOnInit(): void {
  }

}
