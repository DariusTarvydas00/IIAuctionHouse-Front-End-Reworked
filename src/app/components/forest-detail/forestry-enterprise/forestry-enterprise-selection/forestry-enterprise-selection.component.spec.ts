import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestryEnterpriseSelectionComponent } from './forestry-enterprise-selection.component';

describe('ForestryEnterpriseSelectionComponent', () => {
  let component: ForestryEnterpriseSelectionComponent;
  let fixture: ComponentFixture<ForestryEnterpriseSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestryEnterpriseSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestryEnterpriseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
