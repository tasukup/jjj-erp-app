import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeClockComponent } from './time-clock';

describe('TimeClock', () => {
  let component: TimeClockComponent;
  let fixture: ComponentFixture<TimeClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeClockComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeClockComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});