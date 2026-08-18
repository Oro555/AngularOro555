import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
//import { DashboardComponent } from "../components/dashboard/dashboard.component";

@Component({
  selector: 'app-component',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  saludo = 'Hola Angular';
  open = 'Open';
  Road = 'Road'
}
