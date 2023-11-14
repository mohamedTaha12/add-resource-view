import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceBasicInfoComponent } from './resource-basic-info.component';

describe('ResourceBasicInfoComponent', () => {
  let component: ResourceBasicInfoComponent;
  let fixture: ComponentFixture<ResourceBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
