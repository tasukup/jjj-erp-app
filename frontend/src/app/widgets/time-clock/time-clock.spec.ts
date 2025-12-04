import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeClock } from './time-clock';

describe('TimeClock', () => {
  let component: TimeClock;
  let fixture: ComponentFixture<TimeClock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeClock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeClock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
