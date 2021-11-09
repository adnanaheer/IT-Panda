import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitedesignPortfolioComponent } from './websitedesign-portfolio.component';

describe('WebsitedesignPortfolioComponent', () => {
  let component: WebsitedesignPortfolioComponent;
  let fixture: ComponentFixture<WebsitedesignPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitedesignPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitedesignPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
