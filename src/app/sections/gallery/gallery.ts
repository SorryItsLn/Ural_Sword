import { Component } from '@angular/core';

import { Photo } from '../../shared/photo/photo';

@Component({
  selector: 'app-gallery',
  imports: [Photo],
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {
  // 8 кадров. №01 и №05 широкие (2:1, занимают две колонки), остальные квадратные.
  protected readonly items = [
    { src: 'assets/img/gallery-01.jpg', isWide: true },
    { src: 'assets/img/gallery-02.jpg', isWide: false },
    { src: 'assets/img/gallery-03.jpg', isWide: false },
    { src: 'assets/img/gallery-04.jpg', isWide: false },
    { src: 'assets/img/gallery-05.jpg', isWide: true },
    { src: 'assets/img/gallery-06.jpg', isWide: false },
    { src: 'assets/img/gallery-07.jpg', isWide: false },
    { src: 'assets/img/gallery-08.jpg', isWide: false },
  ];
}
