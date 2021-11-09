import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPortfolioComponent } from './cms-portfolio.component';

describe('CmsPortfolioComponent', () => {
  let component: CmsPortfolioComponent;
  let fixture: ComponentFixture<CmsPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
