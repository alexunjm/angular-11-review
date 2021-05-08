import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMenuComponent } from './quote-menu.component';

describe('QuoteMenuComponent', () => {
  let component: QuoteMenuComponent;
  let fixture: ComponentFixture<QuoteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
