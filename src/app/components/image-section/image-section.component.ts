import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

import { gsap } from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 0.8, ease: 'slow(0.7, 0.7, false)', stagger: 0.4 },
});

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [MpButtonDirective],
  templateUrl: './image-section.component.html',
  styleUrls: [
    '../../shared/section.component.scss',
    './image-section.component.scss',
  ],
})
export class ImageSectionComponent implements AfterViewInit {
  @ViewChild('cardCircle', { static: true })
  circleImage!: ElementRef<HTMLDivElement>;
  @ViewChild('imageSection', { static: true })
  imageSection!: ElementRef<HTMLDivElement>;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        this.startAnimation();
        this.observer.unobserve(this.imageSection.nativeElement);
      }
    },
    { threshold: 0.3, rootMargin: '' }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.imageSection.nativeElement);
  }

  startAnimation = () => {
    tl.fromTo(
      this.imageSection.nativeElement,
      {
        visibility: 'invisible',
      },
      {
        visibility: 'visible',
      }
    )
      .from('.mp-image-1', { scale: 0, opacity: 0 })
      .fromTo(
        this.circleImage.nativeElement,
        { height: '0%', opacity: 0, paddingTop: 0 },
        {
          height: '100%',
          paddingTop: '16rem',
          opacity: 1,
          position: 'absolute',
          bottom: 0,
        },
        '-=1'
      )
      .from('.mp-image-3', { scale: 0, opacity: 0, duration: 0.5 }, '-=1');
  };
}
