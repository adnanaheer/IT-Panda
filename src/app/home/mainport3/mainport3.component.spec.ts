import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainport3Component } from './mainport3.component';

describe('Mainport3Component', () => {
  let component: Mainport3Component;
  let fixture: ComponentFixture<Mainport3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainport3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainport3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
