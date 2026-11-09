import { Component } from '@angular/core';

@Component({
  selector: 'app-organizers',
  styleUrl: './organizers.scss',
  templateUrl: './organizers.html',
})
export class Organizers {
  protected readonly organizers = [
    {
      name: '<Имя Фамилия>',
      role: '<Роль на турнире>',
      description: '<Пара слов об организаторе>',
    },
    {
      name: '<Имя Фамилия>',
      role: '<Роль на турнире>',
      description: '<Пара слов об организаторе>',
    },
    {
      name: '<Имя Фамилия>',
      role: '<Роль на турнире>',
      description: '<Пара слов об организаторе>',
    },
  ];
}
