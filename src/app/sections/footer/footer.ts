import { Component } from '@angular/core';

// Соглашения и прочие ссылки добавим в конце
@Component({
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
