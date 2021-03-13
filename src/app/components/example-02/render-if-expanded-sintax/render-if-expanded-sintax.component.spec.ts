import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderIfExpandedSintaxComponent } from './render-if-expanded-sintax.component';

describe('RenderIfExpandedSintaxComponent', () => {
  let component: RenderIfExpandedSintaxComponent;
  let fixture: ComponentFixture<RenderIfExpandedSintaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderIfExpandedSintaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderIfExpandedSintaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
