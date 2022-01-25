import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageSelectionComponent } from './percentage-selection.component';

describe('PercentageSelectionComponent', () => {
  let component: PercentageSelectionComponent;
  let fixture: ComponentFixture<PercentageSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
