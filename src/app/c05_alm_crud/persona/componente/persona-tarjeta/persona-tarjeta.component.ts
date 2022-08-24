import { Component, Input, OnInit } from '@angular/core';
import { IPersona } from 'src/app/c04_pipes/interface/ordenar.interface';

@Component({
  selector: 'app-persona-tarjeta',
  templateUrl: './persona-tarjeta.component.html',
  styleUrls: ['./persona-tarjeta.component.css']
})
export class PersonaTarjetaComponent implements OnInit {

  @Input() persona!: IPersona;



  constructor() { }

  ngOnInit(): void {
  }

}
