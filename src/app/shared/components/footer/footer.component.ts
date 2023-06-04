import { Component, signal } from '@angular/core';
import { FooterFormComponent } from '../footer-form/footer-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterFormComponent, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['../../section.component.scss', './footer.component.scss'],
})
export class FooterComponent {
  faLifeRing = signal(faLifeRing);
}
