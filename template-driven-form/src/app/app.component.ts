import { Component } from '@angular/core';
import {HeroFormComponent} from "./hero-form/hero-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeroFormComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {}
