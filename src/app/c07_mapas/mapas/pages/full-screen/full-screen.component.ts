import { Component, OnInit } from '@angular/core';
// asi sale en la documentación
//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
//import mapboxgl from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log('FullScreenComponent Init')
    //console.log("jj")
    //mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnlzbWFjYXJlbmEiLCJhIjoiY2txYmY4aG9mMGhzYzJuazF6aThrNW12MiJ9.nUyUU0sijIpApgGNVE0-kQ';
    (mapboxgl as any).accessToken = environment.mapboxToken;
    var map = new mapboxgl.Map({
              // el nombeID del div  que contendrá el mapa
                container: 'mapa',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [ -70.5741258612549,-33.58705284734365  ],
                zoom: 12
              });
    }

//************************* */    


}
