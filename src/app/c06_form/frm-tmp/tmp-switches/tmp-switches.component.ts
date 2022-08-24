import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmp-switches',
  templateUrl: './tmp-switches.component.html',
  styleUrls: ['./tmp-switches.component.css']
})
export class TmpSwitchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;



}
