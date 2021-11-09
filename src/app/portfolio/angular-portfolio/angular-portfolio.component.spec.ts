import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPortfolioComponent } from './angular-portfolio.component';

describe('AngularPortfolioComponent', () => {
  let component: AngularPortfolioComponent;
  let fixture: ComponentFixture<AngularPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
