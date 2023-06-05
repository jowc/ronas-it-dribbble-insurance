import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { gsap } from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 0.8, ease: 'slow(0.7, 0.7, false)', stagger: 0.4 },
});

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero-section.component.html',
  styleUrls: [
    '../../shared/section.component.scss',
    './hero-section.component.scss',
  ],
})
export class HeroSectionComponent implements AfterViewInit {
  faAsterisk = signal(faAsterisk);
  @ViewChild('arrowDown') arrowDown!: ElementRef;
  @ViewChild('heroImage')
  heroImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    this.startAnimation();
  }

  startAnimation = () => {
    tl.from('#heroText span', { fontSize: 0, opacity: 0 })
      .from('.mp-card-cols', {
        scale: 0,
        opacity: 0,
        transformOrigin: '0% 50%',
      })
      .from(this.arrowDown.nativeElement, { opacity: 0 }, '-=0.5')
      .fromTo(
        this.heroImage.nativeElement,
        { height: '0%' },
        { height: '100%', position: 'absolute', bottom: 0, duration: 0.5 },
        '-=1'
      );
  };
}
