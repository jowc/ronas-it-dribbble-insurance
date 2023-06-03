import { Component, signal } from '@angular/core';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero-section.component.html',
  styleUrls: [
    '../../shared/section.component.scss',
    './hero-section.component.scss',
  ],
})
export class HeroSectionComponent {
  faAsterisk = signal(faAsterisk);
}
