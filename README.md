ng new expenses-now --no-standalone --routing

ng generate library expense-lib

ng generate module expense-lib

ng generate module expense-lib-routing --project=expense-lib --flat --module=expense-lib

ng generate library my-library --routing
This command generates a library project with a dedicated routing module (my-library-routing.module.ts).