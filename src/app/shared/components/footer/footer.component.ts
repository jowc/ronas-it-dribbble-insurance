import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { FooterFormComponent } from '../footer-form/footer-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

import { gsap } from 'gsap';

const tl = gsap.timeline({
  defaults: { duration: 1, ease: 'power1.inOut', stagger: 0.4 },
});

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterFormComponent, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['../../section.component.scss', './footer.component.scss'],
})
export class FooterComponent {
  faLifeRing = signal(faLifeRing);
  @ViewChild('footerFormText') footerFormText!: ElementRef;
  @ViewChild('footerIcon') footerIcon!: ElementRef;

  observer = new IntersectionObserver(
    (entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startAnimation();
          this.observer.unobserve(this.footerFormText.nativeElement);
        }
      });
    },
    { threshold: 0.2 }
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.footerFormText.nativeElement);
  }

  startAnimation = () => {
    tl.from(this.footerFormText.nativeElement, {
      fontSize: 0,
      opacity: 0,
      transformOrigin: '0% 50%',
    })
      .from('#mp-footer-text-box h5', {
        scale: 0,
        opacity: 0,
      })
      .from(
        '.mp-footer-text',
        {
          scale: 0,
          opacity: 0,
        },
        '-=2'
      );
  };
}
