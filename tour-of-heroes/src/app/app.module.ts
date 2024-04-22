import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeroesComponent,
    HeroDetailComponent,
  ],
  declarations: [
    AppComponent,

  ],
  exports: [
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
