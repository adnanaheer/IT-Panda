import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainport1Component } from './mainport1.component';

describe('Mainport1Component', () => {
  let component: Mainport1Component;
  let fixture: ComponentFixture<Mainport1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainport1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
