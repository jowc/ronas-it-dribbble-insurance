import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { ButtonFullDirective } from 'src/app/shared/directive/button-full.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ButtonFullDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faLifeRing = signal(faLifeRing);
}
