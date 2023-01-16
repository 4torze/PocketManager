import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGIComponent } from './view-g-i.component';

describe('ViewGIComponent', () => {
  let component: ViewGIComponent;
  let fixture: ComponentFixture<ViewGIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
