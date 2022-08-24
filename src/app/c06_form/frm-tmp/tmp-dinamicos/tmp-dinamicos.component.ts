import { Component, OnInit } from '@angular/core';

interface Favorito {
  id: number;
  nombre: string;
}
interface Persona {
  nombre: string;
  favoritos: Favorito[];
}



@Component({
  selector: 'app-tmp-dinamicos',
  templateUrl: './tmp-dinamicos.component.html',
  //styleUrls: ['./tmp-dinamicos.component.css']
})
export class TmpDinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ]
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    // ...=> crea uno nuevo, no por referencia
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index, 1);
  }


  guardar() {
    console.log('formulario posteado');
  }

}
