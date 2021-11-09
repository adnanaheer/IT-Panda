import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmswebComponent } from './cmsweb.component';

describe('CmswebComponent', () => {
  let component: CmswebComponent;
  let fixture: ComponentFixture<CmswebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmswebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
