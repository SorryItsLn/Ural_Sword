import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  private readonly video = viewChild<ElementRef<HTMLVideoElement>>('heroVideo');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Видео — фон первого экрана: не крутим его, когда он ушёл из вида,
    // и показываем статичный кадр тем, кто просил меньше анимации.
    afterNextRender(() => {
      const video = this.video()?.nativeElement;
      if (!video) {
        return;
      }

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      let isVisible = true;

      const syncPlayback = () => {
        if (reducedMotion.matches || !isVisible) {
          video.pause();
          return;
        }
        void video.play().catch(() => {
          // Браузер может запретить автоплей — тогда останется постер
        });
      };

      const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback();
      });
      observer.observe(video);

      reducedMotion.addEventListener('change', syncPlayback);
      syncPlayback();

      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        reducedMotion.removeEventListener('change', syncPlayback);
      });
    });
  }
}
