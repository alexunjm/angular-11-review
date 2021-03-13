import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderIfThenTemplateComponent } from './render-if-then-template.component';

describe('RenderIfThenTemplateComponent', () => {
  let component: RenderIfThenTemplateComponent;
  let fixture: ComponentFixture<RenderIfThenTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderIfThenTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderIfThenTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
