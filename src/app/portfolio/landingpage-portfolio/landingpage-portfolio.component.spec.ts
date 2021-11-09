import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagePortfolioComponent } from './landingpage-portfolio.component';

describe('LandingpagePortfolioComponent', () => {
  let component: LandingpagePortfolioComponent;
  let fixture: ComponentFixture<LandingpagePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingpagePortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
