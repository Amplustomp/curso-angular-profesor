//import { Component, OnInit } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit , OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  nombre: string = 'Harrys';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() { 
    console.log("Constructor*********")
  }
  ngOnInit(): void {
    console.log("ngOnInit*********++")
  }

  ngOnDestroy(): void {
    console.log("ngOnInit*********++")
  }
  ngAfterViewChecked(): void {
    console.log("ngOnInit*********++")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit*********++")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked*********++")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit*********++")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck*********++")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges*********++")
  }

  guardar() {

  }


}
