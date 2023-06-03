import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  faAsterisk = signal(faAsterisk);
}
