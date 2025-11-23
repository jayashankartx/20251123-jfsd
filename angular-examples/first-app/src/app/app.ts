import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('first-app');
  //typescript code
  username: string = "Atharv";
  dob : Date = new Date("2024-08-04");
  //java script dode
  name = "Tanish";
  birthday = new Date("2009-09-22");
}
