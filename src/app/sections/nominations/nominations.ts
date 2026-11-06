import { Component } from '@angular/core';

@Component({
  selector: 'app-nominations',
  styleUrl: './nominations.scss',
  templateUrl: './nominations.html',
})
export class Nominations {
  protected readonly nominations = [
    { title: '<Номинация 1>', description: '<Оружие, формат боя, кол-во участников>' },
    { title: '<Номинация 2>', description: '<Оружие, формат боя, кол-во участников>' },
    { title: '<Номинация 3>', description: '<Оружие, формат боя, кол-во участников>' },
    { title: '<Номинация 4>', description: '<Оружие, формат боя, кол-во участников>' },
  ];
}
