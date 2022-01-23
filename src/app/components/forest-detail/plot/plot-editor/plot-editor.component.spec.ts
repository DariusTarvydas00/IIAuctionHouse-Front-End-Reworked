import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotEditorComponent } from './plot-editor.component';

describe('PlotEditorComponent', () => {
  let component: PlotEditorComponent;
  let fixture: ComponentFixture<PlotEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
