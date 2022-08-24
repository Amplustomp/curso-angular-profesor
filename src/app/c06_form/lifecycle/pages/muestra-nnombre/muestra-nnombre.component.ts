import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nnombre',
  templateUrl: './muestra-nnombre.component.html',
  styleUrls: ['./muestra-nnombre.component.css']
})
export class MuestraNnombreComponent implements OnInit ,OnChanges{

  @Input() nombre!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on Cambios ",changes)
  }

  ngOnInit(): void {
  }

}
