import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobappdevelopmentPortfolioComponent } from './mobappdevelopment-portfolio.component';

describe('MobappdevelopmentPortfolioComponent', () => {
  let component: MobappdevelopmentPortfolioComponent;
  let fixture: ComponentFixture<MobappdevelopmentPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobappdevelopmentPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobappdevelopmentPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
