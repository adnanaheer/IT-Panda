import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicdesignPortfolioComponent } from './graphicdesign-portfolio.component';

describe('GraphicdesignPortfolioComponent', () => {
  let component: GraphicdesignPortfolioComponent;
  let fixture: ComponentFixture<GraphicdesignPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicdesignPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicdesignPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
