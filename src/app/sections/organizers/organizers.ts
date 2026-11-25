// Блок организаторов временно убран со страницы (см. app.html) — данные появятся позже.
// Чтобы вернуть: добавить <app-organizers /> в app.html и импорт в app.ts.
import { Component } from '@angular/core';

import { Photo } from '../../shared/photo/photo';

@Component({
  selector: 'app-organizers',
  imports: [Photo],
  styleUrl: './organizers.scss',
  templateUrl: './organizers.html',
})
export class Organizers {
  protected readonly organizers = [
    {
      name: '<Имя Фамилия>',
      role: '<Роль на турнире>',
      description: '<Пара слов об организаторе>',
      photo: 'assets/img/org-1.jpg',
    },
    {
      name: '<Имя Фамилия>',
      role: '<Роль на турнире>',
      description: '<Пара слов об организаторе>',
      photo: 'assets/img/org-2.jpg',
    },
    {
      name: '<Имя Фамилия>',
      role: '<Роль на турнире>',
      description: '<Пара слов об организаторе>',
      photo: 'assets/img/org-3.jpg',
    },
  ];
}
