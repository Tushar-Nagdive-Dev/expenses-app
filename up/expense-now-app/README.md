# ExpenseNowApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


To set up an Angular application with routing and create a separate library for common code and business logic, follow these steps:

### Step 1: Install Angular CLI (if not already installed)
If you haven't installed the Angular CLI globally, run:
```bash
npm install -g @angular/cli
```

### Step 2: Create a New Angular Application with Routing
Create your Angular application with routing by using the `--routing` flag:
```bash
ng new expense-management --routing
cd expense-management
```

This command will create an Angular app named **expense-management** with built-in routing.

### Step 3: Create a Separate Angular Library for Common Code and Business Logic
You can create an Angular library inside the application to encapsulate common code and business logic.

1. **Generate the Library**:
   Run the following command to generate a new library:
   ```bash
   ng generate library shared
   ```
   This will create a `projects/shared` folder containing the library code. The `shared` library will be the place where you put your common services, business logic, models, etc.

2. **Update Library Structure** (optional):
   You may want to organize your library to separate concerns like models, services, and utilities.

   - Create folders within the `src/lib` directory for organization, such as:
     ```bash
     src/
     ├── lib/
     │   ├── models/
     │   ├── services/
     │   └── utilities/
     ```

3. **Add Code to the Library**:
   Add your common services, models, and business logic within the appropriate folders.

   For example, if you're creating a service to handle business logic:

   **Generate a service in the library:**
   ```bash
   ng generate service projects/shared/src/lib/services/expense
   ```

   The generated service will look like this:
   ```typescript
   // projects/shared/src/lib/services/expense.service.ts
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root',
   })
   export class ExpenseService {
     constructor() {}

     calculateTotalExpenses(expenses: any[]): number {
       return expenses.reduce((acc, expense) => acc + expense.amount, 0);
     }
   }
   ```

### Step 4: Use the Library in the Main Application
1. **Build the Library**:
   Before you can use the library in your main app, you need to build it:
   ```bash
   ng build shared
   ```

2. **Import the Library into the App Module**:
   In your main Angular application, import the modules, services, or components from the library:
   ```typescript
   // src/app/app.module.ts
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppRoutingModule } from './app-routing.module';
   import { AppComponent } from './app.component';

   import { SharedModule } from 'projects/shared/src/public-api';  // Import the shared library

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, AppRoutingModule, SharedModule],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

3. **Use the Shared Services**:
   Now you can inject the services from your library into your components or other services. For example:
   ```typescript
   // src/app/expense/expense.component.ts
   import { Component } from '@angular/core';
   import { ExpenseService } from 'projects/shared/src/lib/services/expense.service';

   @Component({
     selector: 'app-expense',
     templateUrl: './expense.component.html',
   })
   export class ExpenseComponent {
     totalExpenses: number;

     constructor(private expenseService: ExpenseService) {}

     calculateExpenses() {
       const expenses = [
         { id: 1, amount: 50 },
         { id: 2, amount: 100 },
       ];

       this.totalExpenses = this.expenseService.calculateTotalExpenses(expenses);
     }
   }
   ```

### Step 5: Test the Application and Library
In the latest versions of Angular, the ng new command now creates standalone applications by default. Standalone applications don't require an app-routing.module.ts file, as routing is handled directly within the root component.
Here's why:
Simplified Structure:
Standalone components promote a simpler project structure by reducing the need for separate modules for routing.
Improved Performance:
Standalone components can improve performance by reducing the amount of code that needs to be loaded.
If you still want to create a non-standalone application with a separate routing module, you can use the --no-standalone flag:
Code

ng new app --routing --no-standalone
This will generate an app with the traditional structure, including an app-routing.module.ts file.