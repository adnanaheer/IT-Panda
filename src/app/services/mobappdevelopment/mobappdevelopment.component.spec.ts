import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobappdevelopmentComponent } from './mobappdevelopment.component';

describe('MobappdevelopmentComponent', () => {
  let component: MobappdevelopmentComponent;
  let fixture: ComponentFixture<MobappdevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobappdevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobappdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
