import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpButtonDirective } from '../../directive/button-full.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-form',
  standalone: true,
  imports: [CommonModule, MpButtonDirective, FontAwesomeModule],
  templateUrl: './footer-form.component.html',
  styleUrls: ['./footer-form.component.scss'],
})
export class FooterFormComponent {
  options = signal(['Travel', 'Health', 'CASCO', 'Mortgage', 'Fire']);
  selectedOption = signal('Travel');
  faCalendar = signal(faCalendar);

  ngOnInit() {}
}
