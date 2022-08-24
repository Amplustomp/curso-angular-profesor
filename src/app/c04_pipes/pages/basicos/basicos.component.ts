import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  varEjemplo = "Harrys eL más simpÁtico del mUundo"

  fecha: Date = new Date(); // el día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
