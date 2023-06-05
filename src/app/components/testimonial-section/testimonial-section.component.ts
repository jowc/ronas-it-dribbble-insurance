import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 1, ease: 'slow(0.7, 0.7, false)', stagger: 0.4 },
});

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [TestimonialCardComponent, FontAwesomeModule],
  templateUrl: './testimonial-section.component.html',
  styleUrls: [
    '../../shared/section.component.scss',
    './testimonial-section.component.scss',
  ],
})
export class TestimonialSectionComponent implements AfterViewInit {
  faAsterisk = signal(faAsterisk);
  @ViewChild('testimonial') testimonialBox!: ElementRef;
  @ViewChild('testimonialCard') testimonialCard!: ElementRef;
  @ViewChild('testimonialText') testimonialText!: ElementRef;
  observer = new IntersectionObserver(
    (entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startAnimation();
          this.observer.unobserve(this.testimonialBox.nativeElement);
        }
      });
    },
    { threshold: 0.2 }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.testimonialBox.nativeElement);
  }

  startAnimation = () => {
    tl.from(this.testimonialBox.nativeElement, {
      opacity: 0,
    })
      .from(this.testimonialText.nativeElement, {
        xPercent: 100,
        visibility: 'visible',
        opacity: 0,
      })
      .from('#testimonials-text span', {
        xPercent: 100,
        visibility: 'visible',
        opacity: 0,
      });
  };
}
