import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrDecrInputComponent } from './incr-decr-input.component';

describe('IncrDecrInputComponent', () => {
  let component: IncrDecrInputComponent;
  let fixture: ComponentFixture<IncrDecrInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrDecrInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrDecrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
