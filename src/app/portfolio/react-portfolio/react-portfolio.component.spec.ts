import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactPortfolioComponent } from './react-portfolio.component';

describe('ReactPortfolioComponent', () => {
  let component: ReactPortfolioComponent;
  let fixture: ComponentFixture<ReactPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
