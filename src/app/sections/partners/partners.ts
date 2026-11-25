// Блок партнёров временно убран со страницы (см. app.html) — данные появятся позже.
// Чтобы вернуть: добавить <app-partners /> в app.html и импорт в app.ts.
import { Component } from '@angular/core';

import { Photo } from '../../shared/photo/photo';

@Component({
  selector: 'app-partners',
  imports: [Photo],
  styleUrl: './partners.scss',
  templateUrl: './partners.html',
})
export class Partners {
  // logo — png с прозрачным фоном, пропорции 3:2
  protected readonly partners = Array.from({ length: 6 }, (_, i) => ({
    name: '<Партнёр>',
    logo: `assets/img/partner-${i + 1}.png`,
  }));
}
