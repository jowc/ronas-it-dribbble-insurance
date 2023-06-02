import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mpButtonFull]',
  standalone: true,
})
export class ButtonFullDirective {
  constructor(private el: ElementRef<HTMLButtonElement>) {
    this.el.nativeElement.classList.add(
      'bg-accent',
      'py-3',
      'px-9',
      'rounded-3xl',
      'text-primary-100',
      'font-semibold'
    );
  }
}
