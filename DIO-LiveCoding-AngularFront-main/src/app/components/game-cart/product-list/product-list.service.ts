import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Games} from "./model/games.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const games: Games[] = [
    { id: '1', name: 'Game1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Game2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
    { id: '3', name: 'Game3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

  ];

@Injectable()


export class GamesService {

  private url = 'https://localhost:44382/api/Gamestore';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    // getGames(){
    //     return Games;
    // }

    getGames() {
      return this.http.get(this.url)

  
    }

}
