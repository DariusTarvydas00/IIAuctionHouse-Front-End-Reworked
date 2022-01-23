import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestGroupComponent } from './forest-group.component';

describe('ForestGroupComponent', () => {
  let component: ForestGroupComponent;
  let fixture: ComponentFixture<ForestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
