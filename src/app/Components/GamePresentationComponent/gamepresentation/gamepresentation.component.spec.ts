import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepresentationComponent } from './gamepresentation.component';

describe('GamepresentationComponent', () => {
  let component: GamepresentationComponent;
  let fixture: ComponentFixture<GamepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamepresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
