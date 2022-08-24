import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's03-gifsApp';
  constructor(private pNC:PrimeNGConfig){}
  ngOnInit(): void {
    this.pNC.ripple=true
  }
}
