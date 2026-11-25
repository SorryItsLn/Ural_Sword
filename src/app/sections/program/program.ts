import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  styleUrl: './program.scss',
  templateUrl: './program.html',
})
export class Program {
  // Расписание организаторы пришлют позже. Как появится — вписать сюда:
  // { time: '10:00', title: 'Открытие площадки, регистрация команд' }.
  // Пока массив пустой, блок показывает заметку о том, что программа будет позже.
  protected readonly schedule: { time: string; title: string }[] = [];
}
