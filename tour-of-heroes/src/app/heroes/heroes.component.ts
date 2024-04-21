import { Component } from '@angular/core';
import {HEROES} from "../mock-heroes"
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {Hero} from "../hero";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  imports: [NgFor, UpperCasePipe, FormsModule, NgIf],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes = HEROES
  selectedHero?: Hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
