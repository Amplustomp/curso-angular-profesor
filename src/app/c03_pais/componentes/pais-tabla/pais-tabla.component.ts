import { Component, Input, OnInit } from '@angular/core';
import { IPais } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paises_entrada:IPais[]=[]
  constructor() { }
  ngOnInit(): void {
  }

}
