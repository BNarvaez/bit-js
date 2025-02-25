import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-foundations',
  imports: [PadreComponent, UpperCasePipe, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
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

  titulo1: string = 'Fundamentos'
  titulo2: string = 'Interpolación de propiedades'
  titulo3: string = 'Control del flujo'
  cantidad: number = 987.3452
  fecha: Date = new Date()
  texto: string = 'Hola Mundo'
  precio: number = 123.45
}
