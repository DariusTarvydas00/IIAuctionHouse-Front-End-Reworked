import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestEditorComponent } from './forest-editor.component';

describe('ForestEditorComponent', () => {
  let component: ForestEditorComponent;
  let fixture: ComponentFixture<ForestEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
