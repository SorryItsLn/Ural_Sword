import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  styleUrl: './program.scss',
  templateUrl: './program.html',
})
export class Program {
  protected readonly schedule = [
    { time: '<10:00>', title: '<Открытие площадки, регистрация бойцов>' },
    { time: '<11:00>', title: '<Торжественное открытие>' },
    { time: '<11:30>', title: '<Отборочные поединки>' },
    { time: '<14:00>', title: '<Перерыв, мастер-классы для зрителей>' },
    { time: '<15:00>', title: '<Финалы>' },
    { time: '<17:30>', title: '<Награждение>' },
  ];
}
