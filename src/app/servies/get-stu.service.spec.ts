import { TestBed } from '@angular/core/testing';

import { GetStuService } from './get-stu.service';

describe('GetStuService', () => {
  let service: GetStuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
