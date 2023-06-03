import { Component } from '@angular/core';
import { MpButtonDirective } from 'src/app/shared/directive/button-full.directive';

@Component({
  selector: 'app-image-section',
  standalone: true,
  imports: [MpButtonDirective],
  templateUrl: './image-section.component.html',
  styleUrls: [
    '../../shared/section.component.scss',
    './image-section.component.scss',
  ],
})
export class ImageSectionComponent {}
