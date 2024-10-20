import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseLibRoutingModule } from './expense-lib-routing.module';
import { ExpensesDashboardComponent } from './components/expenses-dashboard/expenses-dashboard.component';
import { ExpenseLibComponent } from './components/expense-lib.component';

@NgModule({
  declarations: [
    ExpensesDashboardComponent,
    ExpenseLibComponent
  ],
  imports: [
    CommonModule,
    ExpenseLibRoutingModule
  ]
})
export class ExpenseLibModule { }
