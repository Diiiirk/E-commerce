import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { gameCartComponent } from './components/game-cart/game-cart.component';
import { ProductListComponent } from './components/game-cart/product-list/product-list.component';
import { FiltersComponent } from './components/game-cart/filters/filters.component';

import { ProductItemComponent } from './components/game-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import {gamesService} from './components/game-cart/product-list/product-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    gameCartComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [gamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
