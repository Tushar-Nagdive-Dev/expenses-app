import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseLibComponent } from '../lib/components/expense-lib.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseLibComponent
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
