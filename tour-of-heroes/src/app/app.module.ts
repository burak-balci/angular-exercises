import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
