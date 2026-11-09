import { Component } from '@angular/core';

import {
  About,
  Footer,
  Gallery,
  Header,
  Hero,
  Nominations,
  Organizers,
  Partners,
  Place,
  Program,
  School,
  Tickets,
} from './sections';

@Component({
  imports: [
    About,
    Footer,
    Gallery,
    Header,
    Hero,
    Nominations,
    Organizers,
    Partners,
    Place,
    Program,
    School,
    Tickets,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
