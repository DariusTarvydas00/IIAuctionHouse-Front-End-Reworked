import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlotComponent } from './register-plot.component';

describe('RegisterPlotComponent', () => {
  let component: RegisterPlotComponent;
  let fixture: ComponentFixture<RegisterPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
