import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: '/frm-tmp/tmp-basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: '/frm-tmp/tmp-dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/frm-tmp/tmp-switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: '/frm-reac/reac-basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: '/frm-reac/reac-dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/frm-reac/reac-switches'
    },
  ];


  authMenu: MenuItem[] = [
    {
      texto: 'Registro',
      ruta: '/frm-auth/auth/registro'
    },
    {
      texto: 'Login',
      ruta: '/frm-auth/auth/login'
    },
  ]

  

}
