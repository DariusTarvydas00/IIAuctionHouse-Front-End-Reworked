import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotSelectionComponent } from './plot-selection.component';

describe('PlotSelectionComponent', () => {
  let component: PlotSelectionComponent;
  let fixture: ComponentFixture<PlotSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
