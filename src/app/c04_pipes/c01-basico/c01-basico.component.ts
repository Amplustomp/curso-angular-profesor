import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c01-basico',
  templateUrl: './c01-basico.component.html',
  styleUrls: ['./c01-basico.component.css']
})
export class C01BasicoComponent implements OnInit {
  public objetoJSon={run:1
                    ,dv:'9'
                    ,nombres:'haRRrrys zamBRANo'
                  }


  constructor() { }

  ngOnInit(): void {
  }

}
