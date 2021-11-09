import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainport4Component } from './mainport4.component';

describe('Mainport4Component', () => {
  let component: Mainport4Component;
  let fixture: ComponentFixture<Mainport4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainport4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainport4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
