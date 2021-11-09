import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpPortfolioComponent } from './erp-portfolio.component';

describe('ErpPortfolioComponent', () => {
  let component: ErpPortfolioComponent;
  let fixture: ComponentFixture<ErpPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
