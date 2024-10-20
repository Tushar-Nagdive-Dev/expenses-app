import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseLibComponent } from './expense-lib.component';

describe('ExpenseLibComponent', () => {
  let component: ExpenseLibComponent;
  let fixture: ComponentFixture<ExpenseLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
