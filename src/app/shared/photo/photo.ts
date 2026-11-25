import { Component, ElementRef, afterNextRender, inject, input, signal } from '@angular/core';

/**
 * Слот под картинку. Пока файла нет (или он битый) — показывает зелёную заглушку,
 * как старый .ph, поэтому вёрстка не «прыгает». Положить файл по пути из src —
 * и фото появится без правок кода.
 *
 * Пропорции задаёт родитель через класс на элементе:
 *   <app-photo class="about__photo" src="assets/img/about-2.jpg" label="фото" />
 */
@Component({
  selector: 'app-photo',
  styleUrl: './photo.scss',
  template: `
    @if (src() && !failed()) {
      <img
        [src]="src()"
        [alt]="alt()"
        [attr.loading]="loading()"
        [style.object-fit]="fit()"
        decoding="async"
        (error)="failed.set(true)"
      />
    } @else {
      <span class="photo__label">{{ label() }}</span>
    }
  `,
})
export class Photo {
  readonly src = input('');
  readonly alt = input('');
  readonly label = input('фото');
  readonly loading = input<'eager' | 'lazy'>('lazy');
  readonly fit = input<'cover' | 'contain'>('cover');

  protected readonly failed = signal(false);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    afterNextRender(() => {
      const img = this.host.nativeElement.querySelector('img');
      if (img?.complete && img.naturalWidth === 0) {
        this.failed.set(true);
      }
    });
  }
}
