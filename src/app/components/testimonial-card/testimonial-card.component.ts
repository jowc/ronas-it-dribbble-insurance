import { CommonModule } from '@angular/common';
import {
  OnInit,
  Component,
  signal,
  ViewChild,
  ElementRef,
  inject,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

import Swiper, { Pagination, Autoplay } from 'swiper';
interface cardInterface {
  img_url: string;
  person_name: string;
  job_title: string;
  comment: string;
}

const testimonials: cardInterface[] = [
  {
    img_url: 'assets/guy 1.jpg',
    person_name: 'Emito Usman',
    job_title: 'The agency founder',
    comment:
      "Not all insurance are the same. That's why agency know that your insurance should be customised to suit your situation.",
  },
  {
    img_url: 'assets/smiley girl.jpg',
    person_name: 'Sally Uche',
    job_title: 'Techprenuer',
    comment:
      "With over twenty years of industry experience. 'Darcy Insurance Product' has learnt a lot. The one thing we know for sure is that we are all about you. If you find searching for insurance frustrating we are here to help you",
  },
  {
    img_url: 'assets/happy couple.jpg',
    person_name: 'Oluwatobi Chiobi',
    job_title: 'Techprenuer',
    comment:
      'The one thing we know for sure is that we are all about you. If you find searching for insurance frustrating we are here to help you. With over twenty years of industry experience.',
  },
];

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule, MpButtonDirective],
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent implements OnInit {
  testimonials = signal<cardInterface[]>(testimonials);

  @ViewChildren('commentImageCircle')
  circleImage!: QueryList<ElementRef<HTMLImageElement>>;

  @ViewChildren('mpTestimonialCard')
  testimonialCards!: QueryList<ElementRef<HTMLImageElement>>;

  swiperSlides = document.querySelectorAll('.swiper-slide');

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mp-height');
        }
      });
    },
    { threshold: 1, rootMargin: '' }
  );

  observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mp-scale');
        }
      });
    },
    { threshold: 1, rootMargin: '' }
  );

  ngOnInit(): void {
    new Swiper('.swiper', {
      modules: [Pagination, Autoplay],
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 8500,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
  ngAfterViewChecked() {
    this.circleImage.forEach((slide) =>
      this.observer.observe(slide.nativeElement)
    );

    this.testimonialCards.forEach((element) =>
      this.observer2.observe(element.nativeElement)
    );
  }
}
