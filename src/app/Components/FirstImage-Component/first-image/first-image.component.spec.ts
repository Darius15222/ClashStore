import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstImageComponent } from './first-image.component';

describe('FirstImageComponent', () => {
  let component: FirstImageComponent;
  let fixture: ComponentFixture<FirstImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
