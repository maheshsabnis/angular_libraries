import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUtilLibComponent } from './my-util-lib.component';

describe('MyUtilLibComponent', () => {
  let component: MyUtilLibComponent;
  let fixture: ComponentFixture<MyUtilLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyUtilLibComponent]
    });
    fixture = TestBed.createComponent(MyUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
