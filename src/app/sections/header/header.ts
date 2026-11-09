import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly leftLinks = [
    { href: '#organizers', label: 'Организаторы' },
    { href: '#partners', label: 'Партнеры' },
    { href: '#gallery', label: 'Галерея' },
  ];

  protected readonly rightLinks = [
    { href: '#registration', label: 'Регистрация' },
    { href: '#program', label: 'Программа' },
    { href: '#tickets', label: 'Билеты' },
  ];

  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
