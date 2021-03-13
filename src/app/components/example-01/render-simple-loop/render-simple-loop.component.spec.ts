import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderSimpleLoopComponent } from './render-simple-loop.component';

describe('RenderSimpleLoopComponent', () => {
  let component: RenderSimpleLoopComponent;
  let fixture: ComponentFixture<RenderSimpleLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderSimpleLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderSimpleLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
