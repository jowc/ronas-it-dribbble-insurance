import { Component, signal } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

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
export class TestimonialSectionComponent {
  faAsterisk = signal(faAsterisk);
}
