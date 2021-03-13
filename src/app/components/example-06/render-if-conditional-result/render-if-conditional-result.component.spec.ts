import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderIfConditionalResultComponent } from './render-if-conditional-result.component';

describe('RenderIfConditionalResultComponent', () => {
  let component: RenderIfConditionalResultComponent;
  let fixture: ComponentFixture<RenderIfConditionalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderIfConditionalResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderIfConditionalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
