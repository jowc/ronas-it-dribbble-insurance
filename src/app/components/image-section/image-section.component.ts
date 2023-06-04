import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

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

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting)
        entries[0].target.classList.add('mp-height');
    },
    { threshold: 1, rootMargin: '' }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.circleImage.nativeElement);
  }
}
