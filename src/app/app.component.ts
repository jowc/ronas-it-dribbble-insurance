import { Component } from '@angular/core';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FooterFormComponent } from './shared/components/footer-form/footer-form.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FooterFormComponent,
    TestimonialCardComponent,
    HeroSectionComponent,
    ImageSectionComponent,
  ],
})
export class AppComponent {}
