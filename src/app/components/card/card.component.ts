import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/interfaces/info';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data: Array<Info> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
