import { TestBed } from '@angular/core/testing';

import { ExpenseLibService } from './expense-lib.service';

describe('ExpenseLibService', () => {
  let service: ExpenseLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
