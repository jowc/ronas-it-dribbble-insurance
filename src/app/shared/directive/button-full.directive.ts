import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[mpButton]',
  standalone: true,
})
export class MpButtonDirective implements OnInit {
  @Input({ required: true }) mpButtonTheme: 'full' | 'outline' = 'full';
  @Input() mpButtonBgColor: string = '';
  @Input() mpButtonColor: string = '';

  constructor(private el: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    if (this.mpButtonTheme !== 'full') {
      this.el.nativeElement.classList.add(
        'py-3',
        'px-9',
        'rounded-3xl',
        this.mpButtonColor ? this.mpButtonColor : 'text-white'
      );
    } else {
      this.el.nativeElement.classList.add(
        this.mpButtonBgColor ? this.mpButtonBgColor : 'bg-accent',
        'py-3',
        'px-11',
        'rounded-3xl',
        'font-semibold',
        this.mpButtonColor ? this.mpButtonColor : 'text-primary-100'
      );
    }
  }
}
