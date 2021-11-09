import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarketingPortfolioComponent } from './digitalmarketing-portfolio.component';

describe('DigitalmarketingPortfolioComponent', () => {
  let component: DigitalmarketingPortfolioComponent;
  let fixture: ComponentFixture<DigitalmarketingPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalmarketingPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalmarketingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
