import { Component } from '@angular/core';
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {Hero} from "../hero";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  imports: [NgFor, UpperCasePipe, FormsModule, NgIf, HeroDetailComponent, RouterLink],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes: Hero[] = []

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }
}
