import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery {
  // Пока заглушки; потом массив путей к фото/видео
  protected readonly items = Array.from({ length: 12 }, (_, i) => ({
    isVideo: i % 5 === 0,
    isWide: i % 7 === 0,
  }));
}
