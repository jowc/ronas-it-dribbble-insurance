import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLifeRing,
  faKey,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

import { gsap } from 'gsap';

let tl = gsap.timeline({
  defaults: { duration: 1, ease: 'power1.inOut', stagger: 0.3 },
});
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MpButtonDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  faLifeRing = signal(faLifeRing);
  faKey = signal(faKey);
  faChevronDown = signal(faChevronDown);
  @ViewChildren('headerItems') headerItems!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    tl.from('.mp-headerItems', { scale: 0, opacity: 0 });
  }
}
