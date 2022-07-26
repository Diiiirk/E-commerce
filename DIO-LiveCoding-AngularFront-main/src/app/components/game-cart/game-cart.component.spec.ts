import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gameCartComponent } from './game-cart.component';

describe('gameCartComponent', () => {
  let component: gameCartComponent;
  let fixture: ComponentFixture<gameCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ gameCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(gameCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
