import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

@Component({
  selector: 'app-choose-fund',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MpButtonDirective],
  templateUrl: './choose-fund.component.html',
  styleUrls: [
    '../../shared/section.component.scss',
    './choose-fund.component.scss',
  ],
})
export class ChooseFundComponent {
  faAsterisk = signal(faAsterisk);
}
