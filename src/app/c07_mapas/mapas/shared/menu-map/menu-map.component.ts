import { Component, OnInit } from '@angular/core';
interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu-map',
  templateUrl: './menu-map.component.html',
  styleUrls: ['./menu-map.component.css']
})
export class MenuMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades'
    },
  ];

}
