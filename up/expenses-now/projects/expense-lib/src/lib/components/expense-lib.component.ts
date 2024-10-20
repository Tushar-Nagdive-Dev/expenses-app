import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'lib-expense-lib',
  templateUrl: './expense-lib.component.html',
  styleUrl: './expense-lib.component.css'
})
export class ExpenseLibComponent implements OnInit{

  constructor(
    private route: Router
  ) {}

  ngOnInit(): void {
    
  }

  getDashboard() {
    console.log("Call Dashboard");
    this.route.navigate(['/dashboard']);
  }

}
