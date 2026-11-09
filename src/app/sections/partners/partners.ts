import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  styleUrl: './partners.scss',
  templateUrl: './partners.html',
})
export class Partners {
  // Пока заглушки; потом название, логотип и ссылка партнёра
  protected readonly partners = Array.from({ length: 6 }, () => ({ name: '<Партнёр>' }));
}
