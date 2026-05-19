import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}