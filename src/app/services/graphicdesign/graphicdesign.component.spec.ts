import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicdesignComponent } from './graphicdesign.component';

describe('GraphicdesignComponent', () => {
  let component: GraphicdesignComponent;
  let fixture: ComponentFixture<GraphicdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
