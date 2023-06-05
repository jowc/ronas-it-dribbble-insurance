import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';


import { gsap } from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 0.8, ease: 'slow(0.7, 0.7, false)', stagger: 0.4 },
});

@Component({
  selector: 'app-choose-fund',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MpButtonDirective],
  templateUrl: './choose-fund.component.html',
  styleUrls: [
    '../../shared/section.component.scss',
    './choose-fund.component.scss',
  ],
})
export class ChooseFundComponent implements AfterViewInit {
  faAsterisk = signal(faAsterisk);
  @ViewChild('fundImage', { static: true })
  circleImage!: ElementRef<HTMLDivElement>;
  @ViewChild('fundContainer', { static: true })
  fundContainer!: ElementRef<HTMLDivElement>;

  observer = new IntersectionObserver(
    (entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startAnimation();
          this.observer.unobserve(this.fundContainer.nativeElement);
        }
      });
    },
    { threshold: 0.2 }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.fundContainer.nativeElement);
  }

  startAnimation = () => {
    tl.fromTo(
      this.fundContainer.nativeElement,
      {
        visibility: 'invisible',
      },
      {
        visibility: 'visible',
      }
    )
      .from('#fund-text span', { fontSize: 0, opacity: 0 })
      .from('.mp-fund-card', {
        scale: 0,
        opacity: 0,
        transformOrigin: '0% 50%',
      })
      .fromTo(
        this.circleImage.nativeElement,
        { height: '0%' },
        { height: '100%', position: 'absolute', bottom: 0, duration: 0.5 },
        '-=1'
      );
  };
}
