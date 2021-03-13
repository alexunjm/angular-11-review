import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderLoopTrackByFnComponent } from './render-loop-track-by-fn.component';

describe('RenderLoopTrackByFnComponent', () => {
  let component: RenderLoopTrackByFnComponent;
  let fixture: ComponentFixture<RenderLoopTrackByFnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderLoopTrackByFnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderLoopTrackByFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
