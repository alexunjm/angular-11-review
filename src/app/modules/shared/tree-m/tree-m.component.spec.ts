import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeMComponent } from './tree-m.component';

describe('TreeMComponent', () => {
  let component: TreeMComponent;
  let fixture: ComponentFixture<TreeMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
