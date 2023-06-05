import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpButtonDirective } from '../../directive/button-full.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap';

const tl = gsap.timeline({
  defaults: {
    duration: 0.5,
    scale: 0,
    opacity: 0,
    ease: 'power1.inOut',
    stagger: 0.4,
  },
});
@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [CommonModule, MpButtonDirective, FontAwesomeModule],
  templateUrl: './footer-form.component.html',
  styleUrls: ['./footer-form.component.scss'],
})
export class FooterFormComponent {
  options = signal(['Travel', 'Health', 'CASCO', 'Mortgage', 'Fire']);
  selectedOption = signal('Travel');
  faCalendar = signal(faCalendar);

  @ViewChild('footerForm') footerForm!: ElementRef;

  observer = new IntersectionObserver(
    (entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startAnimation();
          this.observer.unobserve(this.footerForm.nativeElement);
        }
      });
    },
    { threshold: 0 }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.footerForm.nativeElement);
  }

  startAnimation = () => {
    tl.from('.mp-form-option', {}).from('.mp-form-field', {}, '-=1.4');
  };
}
