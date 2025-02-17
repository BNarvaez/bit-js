import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-foundations',
  imports: [PadreComponent],
  templateUrl: './foundations.component.html',
  styleUrl: './foundations.component.css'
})
export class FoundationsComponent {
  nombreUsuario: string = 'Pepita'
  estaLogueado: boolean = true
  devs: string[] = [
    'Alexandra', 
    'Brayan', 
    'Daniel', 
    'Isaac', 
    'Javier', 
    'Juan', 
    'Manuela', 
    'Sergio', 
    'Valentina'
  ];

  ooss = [
    {id: 'win', name: 'Windows'},
    {id: 'osx', name: 'MacOs'},
    {id: 'linux', name: 'Linux'},
  ]
}
