import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ImageModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'expense-now-app';

  constructor() {

  }

  ngOnInit(): void {
    
  }


}
