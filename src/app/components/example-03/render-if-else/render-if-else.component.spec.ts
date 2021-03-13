import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderIfElseComponent } from './render-if-else.component';

describe('RenderIfElseComponent', () => {
  let component: RenderIfElseComponent;
  let fixture: ComponentFixture<RenderIfElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderIfElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
