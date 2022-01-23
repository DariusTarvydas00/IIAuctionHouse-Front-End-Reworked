import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTypeSelectionComponent } from './tree-type-selection.component';

describe('TreeTypeSelectionComponent', () => {
  let component: TreeTypeSelectionComponent;
  let fixture: ComponentFixture<TreeTypeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeTypeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
