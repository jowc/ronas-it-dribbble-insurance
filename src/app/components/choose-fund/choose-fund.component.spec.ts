import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFundComponent } from './choose-fund.component';

describe('ChooseFundComponent', () => {
  let component: ChooseFundComponent;
  let fixture: ComponentFixture<ChooseFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChooseFundComponent]
    });
    fixture = TestBed.createComponent(ChooseFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
