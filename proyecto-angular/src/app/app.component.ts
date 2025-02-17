import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from "./components/footer/footer.component";
import { NavComponent } from "./components/nav/nav.component";
import { FormComponent } from "./components/form/form.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, NavComponent, RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'proyecto-angular';
}
