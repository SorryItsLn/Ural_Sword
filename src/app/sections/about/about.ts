import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly stats = [
    { value: '<N>', label: 'бойцов' },
    { value: '<N>', label: 'городов' },
    { value: '<N>', label: 'номинаций' },
    { value: '<N>', label: 'зрителей в прошлом году' },
  ];
}
