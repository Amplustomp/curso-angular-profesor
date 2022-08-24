import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu: MenuItem[] = [
    { ruta: '/graficos/barras', texto: 'Barras' },
    { ruta: '/graficos/barras-doble', texto: 'Barras Dobles' },
    { ruta: '/graficos/donas', texto: 'Dona' },
    { ruta: '/graficos/donas-http', texto: 'Dona Http' },

  ];


}
