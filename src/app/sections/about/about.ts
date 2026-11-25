import { Component } from '@angular/core';

import { Photo } from '../../shared/photo/photo';

@Component({
  selector: 'app-about',
  imports: [Photo],
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {}
