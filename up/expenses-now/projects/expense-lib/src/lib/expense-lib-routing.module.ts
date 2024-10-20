import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseLibComponent } from '../lib/components/expense-lib.component';
import { ExpensesDashboardComponent } from './components/expenses-dashboard/expenses-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseLibComponent
  },
  {
    path: 'dashboard',
    component: ExpensesDashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExpenseLibRoutingModule { }
