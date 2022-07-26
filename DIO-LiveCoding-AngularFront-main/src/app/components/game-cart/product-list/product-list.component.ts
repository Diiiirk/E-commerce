import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Games } from './model/games.model';
import { GamesService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  games: any;
  gamesService: GamesService;

  constructor(  gamesService: gamesService) {

    this.gamesService = gamesService;

    // this.gamesService = new GamesService();
   }

  ngOnInit(): void {

    this.games = this.gamesService.getGames().subscribe((data => {
      this.games = data;
      console.log(this.games);
    }))

  }


}


