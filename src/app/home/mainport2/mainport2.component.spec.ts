import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainport2Component } from './mainport2.component';

describe('Mainport2Component', () => {
  let component: Mainport2Component;
  let fixture: ComponentFixture<Mainport2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mainport2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
