import { Component, Input, OnInit } from '@angular/core';
import { Games } from '../model/games.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  game!: Games;

  constructor() {

   }

  ngOnInit(): void {



  }

}
