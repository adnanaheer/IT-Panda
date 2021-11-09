import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaredevelopmentPortfolioComponent } from './softwaredevelopment-portfolio.component';

describe('SoftwaredevelopmentPortfolioComponent', () => {
  let component: SoftwaredevelopmentPortfolioComponent;
  let fixture: ComponentFixture<SoftwaredevelopmentPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwaredevelopmentPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaredevelopmentPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
