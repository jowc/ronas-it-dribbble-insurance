import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
  observer = new IntersectionObserver(
    (entries) => entries[0].target.classList.add('mp-height'),
    { threshold: 1 }
  );

  @ViewChild('heroImage') heroImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    this.observer.observe(this.heroImage.nativeElement);
  }
}
