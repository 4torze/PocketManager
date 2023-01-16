import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTotalComponent } from './widget-total.component';

describe('WidgetTotalComponent', () => {
  let component: WidgetTotalComponent;
  let fixture: ComponentFixture<WidgetTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
