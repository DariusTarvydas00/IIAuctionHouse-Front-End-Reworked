import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestUidSelectionComponent } from './forest-uid-selection.component';

describe('ForestUidSelectionComponent', () => {
  let component: ForestUidSelectionComponent;
  let fixture: ComponentFixture<ForestUidSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestUidSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestUidSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
