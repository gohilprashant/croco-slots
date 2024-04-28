import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  standalone: true,
  imports: [],
  templateUrl: './hero-img.component.html',
  styleUrl: './hero-img.component.scss',
})
export class HeroImgComponent {
  @Input({ required: true }) imgSrc: any;
  @Input({ required: true }) imgAlt: any;
}
