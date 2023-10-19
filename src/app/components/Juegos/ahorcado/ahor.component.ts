import { Component } from '@angular/core';
@Component({
  selector: 'app-ahor',
  templateUrl: './ahor.component.html',
  styleUrls: ['./ahor.component.css']
})

export class AhorComponent {
palabra:string ="";
title = 'Ahorcado';
etapa = 1;
IngresaPalabra(palabra: string) {
  this.palabra = palabra;
}

CambiaEtapa(etapa: number) {
  this.etapa = etapa;
}
 
}