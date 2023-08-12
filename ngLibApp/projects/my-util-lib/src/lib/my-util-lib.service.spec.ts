import { TestBed } from '@angular/core/testing';

import { MyUtilLibService } from './my-util-lib.service';

describe('MyUtilLibService', () => {
  let service: MyUtilLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyUtilLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
