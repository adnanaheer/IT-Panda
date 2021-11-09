import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcepagetopComponent } from './forcepagetop.component';

describe('ForcepagetopComponent', () => {
  let component: ForcepagetopComponent;
  let fixture: ComponentFixture<ForcepagetopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcepagetopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcepagetopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
