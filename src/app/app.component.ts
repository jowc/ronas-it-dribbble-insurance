import { Component } from '@angular/core';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { ChooseFundComponent } from './components/choose-fund/choose-fund.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ImageSectionComponent,
    TestimonialSectionComponent,
    ChooseFundComponent,
  ],
})
export class AppComponent {}
