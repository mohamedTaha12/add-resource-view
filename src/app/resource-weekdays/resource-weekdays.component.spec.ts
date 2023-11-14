import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceWeekdaysComponent } from './resource-weekdays.component';

describe('ResourceWeekdaysComponent', () => {
  let component: ResourceWeekdaysComponent;
  let fixture: ComponentFixture<ResourceWeekdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceWeekdaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceWeekdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
