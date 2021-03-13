import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderIfComponent } from './render-if.component';

describe('RenderIfComponent', () => {
  let component: RenderIfComponent;
  let fixture: ComponentFixture<RenderIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
