// Las líbrerías necesarias Importamos
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

// Nos permite espeficicar cual es nuestro Html y CSS
@Component({
  // Nombre del Componente
  selector: 'app-c00-menu',
  // Nombre del Archivo Html
  templateUrl: './menu.component.html',
  // Nombre del Archivo Css
  //styleUrls: ['./menu.component.css']
})
// Class del Menu
export class CMenuComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
        {   label: 'File',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                          {label:"l1"},
                          {label:"l2"}
                        ]
                         },
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'},
            ]
        },
        {
          label: '01 Básico',
          items: [
              {label: 'Básico',routerLink:'basico'},
              {label: 'Objetos', icon: 'pi pi-fw pi-refresh',routerLink:'objetos/obj'},
          ]
         },
         {
              label: '02 Gifs',
              items: [
                  {label: 'Gifs',routerLink:'gifs-todo'},
              ]
          },
          {
              label: '03 Pais',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'MenuPais', icon: 'pi pi-fw pi-refresh',routerLink:'pais-todo'},
                  {label: 'Por Pais', icon: 'pi pi-fw pi-trash',routerLink:'pais-todo/pais-pais'},
                  {label: 'Por Region', icon: 'pi pi-fw pi-trash',routerLink:'pais-todo/pais-region'},
                  {label: 'Por Capital', icon: 'pi pi-fw pi-trash',routerLink:'pais-todo/pais-capital'}
              ]
          },
          {
            label: '04 Pipes',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Básicos', icon: 'pi pi-fw pi-refresh',routerLink:'pipes/basicos'},
                {label: 'Numeros', icon: 'pi pi-fw pi-trash',routerLink:'pipes/numeros'},
                {label: 'No Comunes', icon: 'pi pi-fw pi-trash',routerLink:'pipes/no-comunes'},
                {label: 'Ordenar', icon: 'pi pi-fw pi-trash',routerLink:'pipes/ordenar'},
            ]
          },
          {
            label: '05 Lazy Rutas',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Lazy Load Menu', icon: 'pi pi-fw pi-refresh',routerLink:'personas/home'},
                {label: 'Login', icon: 'pi pi-fw pi-refresh',routerLink:'auth/login'},
                {label: 'Home', icon: 'pi pi-fw pi-trash',routerLink:'personas/home'},
                {label: 'Listado', icon: 'pi pi-fw pi-trash',routerLink:'personas/listado'},
                {label: 'Agregar', icon: 'pi pi-fw pi-trash',routerLink:'personas/agregar'},
                {label: 'Buscar', icon: 'pi pi-fw pi-trash',routerLink:'personas/buscar'},
                {label: 'Persona', icon: 'pi pi-fw pi-trash',routerLink:'personas/persona'},
            ]
          },
          {
            label: '06 Form ',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-trash',routerLink:'frm-tmp/home'},
                {label: 'Selectores', icon: 'pi pi-fw pi-trash',routerLink:'frm-sel/selector'},
                {label: 'Life Cycle', icon: 'pi pi-fw pi-trash',routerLink:'frm-sel/lifecycle'},
            ]
          },
          {
            label: '07 Mapas ',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'home', icon: 'pi pi-fw pi-trash',routerLink:'/mapas/home'},
                {label: 'fullscreen', icon: 'pi pi-fw pi-trash',routerLink:'/mapas/fullscreen'},
                {label: 'zoom-range', icon: 'pi pi-fw pi-trash',routerLink:'/mapas/zoom-range'},
                {label: 'marcadores', icon: 'pi pi-fw pi-trash',routerLink:'/mapas/marcadores'},
                {label: 'propiedades', icon: 'pi pi-fw pi-trash',routerLink:'/mapas/propiedades'},                
            ]
          },
          {
            label: '08 Gráfica ',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'home', icon: 'pi pi-fw pi-trash',routerLink:'/graficos/home'},
                {label: 'Barra', icon: 'pi pi-fw pi-trash',routerLink:'/graficos/barras'},
                {label: 'Barra Doble', icon: 'pi pi-fw pi-trash',routerLink:'/graficos/barras-doble'},
                {label: 'Donas', icon: 'pi pi-fw pi-trash',routerLink:'/graficos/donas'},
                {label: 'Donas Http', icon: 'pi pi-fw pi-trash',routerLink:'/graficos/donas-http'},                
            ]
          }
          ,
          {
            label: '09 Directivas ',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'home', icon: 'pi pi-fw pi-trash',routerLink:'/directivas/agregar'},
            ]
          }

    ];
  }
}
