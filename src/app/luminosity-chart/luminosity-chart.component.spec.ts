import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminosityChartComponent } from './luminosity-chart.component';

describe('LuminosityChartComponent', () => {
  let component: LuminosityChartComponent;
  let fixture: ComponentFixture<LuminosityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuminosityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminosityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
