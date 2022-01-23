import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestSelectionComponent } from './forest-selection.component';

describe('ForestSelectionComponent', () => {
  let component: ForestSelectionComponent;
  let fixture: ComponentFixture<ForestSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
