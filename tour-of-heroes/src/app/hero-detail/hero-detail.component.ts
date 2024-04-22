import {Component} from '@angular/core';
import {Hero} from '../hero'
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe, Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [FormsModule, NgIf, UpperCasePipe]
})
export class HeroDetailComponent {
  hero: Hero | undefined

  ngOnInit() {
    this.getHero();
  }

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }
}
