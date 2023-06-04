import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLifeRing,
  faKey,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MpButtonDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faLifeRing = signal(faLifeRing);
  faKey = signal(faKey);
  faChevronDown = signal(faChevronDown);
}
