import { Component, EventEmitter,Input,OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  //Envio un evento al padre con emitter  
  @Output() onEnter: EventEmitter < string > = new EventEmitter()
  @Output() onDebounce:EventEmitter < string > = new EventEmitter()

  // placeHolderVar, recibido como parámetro desde el padre  
   @Input() placeHolderVar:string = ""
  //subject esta en rxjs, Observables
  debSubjectHarrys:Subject<string> = new Subject()

  txBuscar:string=""
  // Ahora si necesitaremos el ngOnInit
  ngOnInit(): void {
    /*
    this.debouncer.subscribe(valor=>{
      console.log("debouncer Init:=>",valor)
    })*/
    this.debSubjectHarrys
       .pipe(debounceTime(300))
       .subscribe(valor=>{
          console.log("PInput==,debouncer Init:=>",valor)
          // enviamos al padre el valor
          // lo mismo que el buscar
          this.onDebounce.emit(valor)
    })
  }

  //Método que se ejecutará cuando presione Enter
  buscar(){
    console.log("PInput==,Buscar Submit")
    // Emite un evento al padre enviando el contenido de txBuscar
    this.onEnter.emit(this.txBuscar)
  }
  
  // Método que se ejecuta cada vez que se presiona una tecla
  teclaPresionada(tecla:any){
      const valor = tecla.target.value
      console.log("PInput==,teclaPresionada ",valor)
      //console.log("Termino : ",this.txBuscar)
      this.debSubjectHarrys.next(this.txBuscar)
  }

}
