import { Component, EventEmitter, Input, Output} from '@angular/core';
import { OnInit } from '@angular/core';
import { PalabraService } from '../../../../services/palabra-service';

@Component({
  selector: 'app-ingreso-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class IngresoPalabraComponent implements OnInit {

  @Input() etapaIn:number | undefined;
  @Output() etapaOut = new EventEmitter<number>();
  @Output() palabraOut = new EventEmitter<string>();

  title = "Juego del Ahorcado"
  palabra = "";
  
  constructor(public Servicio: PalabraService) { }

  ngOnInit() {
    this.Servicio.leerPalabras();
  }

  IngresaPalabra(palabra:string){
    this.palabra=palabra.toLowerCase();
    if(this.palabra.length != 0){
      this.etapaOut.emit(2);
      this.palabraOut.emit(this.palabra);
      this.Servicio.guardarPalabra(palabra);
    }
    //window.location.reload();
  }
}
