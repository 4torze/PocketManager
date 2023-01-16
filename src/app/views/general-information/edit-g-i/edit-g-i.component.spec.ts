import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGIComponent } from './edit-g-i.component';

describe('EditGIComponent', () => {
  let component: EditGIComponent;
  let fixture: ComponentFixture<EditGIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
