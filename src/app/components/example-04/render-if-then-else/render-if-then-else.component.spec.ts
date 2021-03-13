import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderIfThenElseComponent } from './render-if-then-else.component';

describe('RenderIfThenElseComponent', () => {
  let component: RenderIfThenElseComponent;
  let fixture: ComponentFixture<RenderIfThenElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderIfThenElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderIfThenElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
