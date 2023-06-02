import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterFormComponent } from './components/footer-form/footer-form.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

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
  ],
})
export class AppComponent {}
