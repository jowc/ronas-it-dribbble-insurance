import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[mpButton]',
  standalone: true,
})
export class ButtonFullDirective implements OnInit {
  @Input() mpButtonTheme: 'full' | 'outline' = 'full';

  constructor(private el: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    if (this.mpButtonTheme !== 'full') {
      console.log('outline');
      this.el.nativeElement.classList.add(
        'py-3',
        'px-9',
        'rounded-3xl',
        'text-white'
      );
    } else {
      console.log('full');
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
}
