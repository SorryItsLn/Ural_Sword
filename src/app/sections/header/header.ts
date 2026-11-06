import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly links = [
    { href: '#about', label: 'О турнире' },
    { href: '#nominations', label: 'Номинации' },
    { href: '#program', label: 'Программа' },
    { href: '#place', label: 'Место' },
    { href: '#school', label: 'Школа' },
    { href: '#gallery', label: 'Галерея' },
  ];

  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
