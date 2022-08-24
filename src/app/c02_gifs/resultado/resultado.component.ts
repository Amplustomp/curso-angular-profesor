import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  get getResultados(){
    return this.resultados.getResultados
  }
  // Inyectamos el servicio gifService  
  constructor(public resultados:GifsService) { }

  ngOnInit(): void {
  }

}
