import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

import { gsap } from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 1, ease: 'power1.inOut', stagger: 0.4 },
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
    { threshold: 0, rootMargin: '-45px' }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.imageSection.nativeElement);
  }

  startAnimation = () => {
    tl.from(this.imageSection.nativeElement, { opacity: 0 })
      .from('.mp-image-1', { scale: 0, opacity: 0 })
      .fromTo(
        this.circleImage.nativeElement,
        { height: '0%', opacity: 0 },
        {
          height: '100%',
          opacity: 1,
          position: 'absolute',
          bottom: 0,
          duration: 2,
        },
        '-=1'
      )
      .from('.mp-image-3', { scale: 0, opacity: 0 });
  };
}
