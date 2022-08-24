import { query } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  //@ViewChild Enlace con el objeto del html ==> #NombreObjeto
  //@ViewChild('txBusqueda') txtBuscar:any;
  // ! especifica que nunca será null
  //@ViewChild('txBusqueda') txtBuscar!:ElementRef;
  // <HTMLInputElement> permite en native mostrar el tipado
  // El Html debe tener el nombre del campo con #txBusqueda
  @ViewChild('txBusqueda') txtBuscar!:ElementRef<HTMLInputElement>;

  // Utilizado en el Html, en el placeHolder
  ayudaForm= 'Buscar Fotos por Ayuda'

  // Inyectamos el servicio gifService
  constructor(private buscaService:GifsService) { }

  ngOnInit(): void {
  }

  // Método que se utiliza en el Html, 
  // Programado cada vez que presione una tecla ==> (keyup)
  keyTeclas(evento:any){
    //console.log("Tecla",evento)
  }

  // Método que se utiliza en el Html, 
  // Cada vez que presione ShifEnter ==> (keyup.shift.enter)
  keyShiftEnter(texto:String){
    console.log("Tecla Enter",texto)
    //document.querySelector('input').value=''
    console.log("Objeto",this.txtBuscar)
  }

  
  // Método que se utiliza en el Html, 
  // Cada vez que presione Enter ==> (keyup.enter)
  keyEnter(){
    console.log("Control Enter********",this.txtBuscar.nativeElement.value)
    this.buscaService.buscarGifts(this.txtBuscar.nativeElement.value)
    this.txtBuscar.nativeElement.value=""
  }

}
