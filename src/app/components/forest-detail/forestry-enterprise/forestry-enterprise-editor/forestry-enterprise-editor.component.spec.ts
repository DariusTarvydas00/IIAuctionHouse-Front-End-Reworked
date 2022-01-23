import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestryEnterpriseEditorComponent } from './forestry-enterprise-editor.component';

describe('ForestryEnterpriseEditorComponent', () => {
  let component: ForestryEnterpriseEditorComponent;
  let fixture: ComponentFixture<ForestryEnterpriseEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestryEnterpriseEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestryEnterpriseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
