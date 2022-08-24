import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPersona } from 'src/app/c04_pipes/interface/ordenar.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPersona ) { }

ngOnInit(): void {
}

borrar() {
this.dialogRef.close(true);
}

cerrar(){
this.dialogRef.close();
}
}
