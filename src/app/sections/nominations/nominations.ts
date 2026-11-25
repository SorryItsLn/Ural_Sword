import { Component } from '@angular/core';

import { Photo } from '../../shared/photo/photo';

@Component({
  selector: 'app-nominations',
  imports: [Photo],
  styleUrl: './nominations.scss',
  templateUrl: './nominations.html',
})
export class Nominations {
  // Из анонса турнира: командные бои 5×5 и 12×12
  protected readonly nominations = [
    {
      title: '5×5',
      description: 'Командные сражения на большом ристалище. В команде — пять бойцов.',
      photo: 'assets/img/nom-1.jpg',
    },
    {
      title: '12×12',
      description: 'Большие командные бои: двенадцать бойцов против двенадцати.',
      photo: 'assets/img/nom-2.jpg',
    },
  ];
}
