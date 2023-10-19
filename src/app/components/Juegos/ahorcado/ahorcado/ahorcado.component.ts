import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { PalabraService } from '../../../../services/palabra-service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {


  @Input() palabraIn:string ='';
  @Output() etapaOut = new EventEmitter<number>();
  mascara: string = '' ;
  palabra: string = '' ;
  vidas: number = 6;
  mensaje: string | undefined;
  juegoterminado: boolean = false;
  
  constructor(private Servicio: PalabraService) { }

  ngOnInit() {

    this.palabra = this.palabraIn
    let temp = [...this.palabra];      
    for (let i=0; i<this.palabra.length; i++) {   
      temp[i] = '-'
    }    
    this.mascara = temp.join("");
    this.juegoterminado = false;
  }

  URL_IMAGENES_PRE = "assets/ahorcado";
  URL_IMAGENES_EXT = ".png";
  vidaImagen = this.URL_IMAGENES_PRE+"6"+this.URL_IMAGENES_EXT; 
  title = "Juego del Ahorcado";

  probarSuerte(letra:string){

    letra=letra.toLowerCase();  
    if(letra.length == 0 || this.juegoterminado)
    {
      return;
    }
    
    let temp = [...this.mascara];  
    let contador = temp.length; 

      for (let i=0; i<temp.length; i++) {
        if(this.palabra.charAt(i) ==letra) { 
          temp[i] = letra; 
          contador--;       
          }
      } 
      if(contador == temp.length && this.vidas!=0) { 
        this.vidas--;
        this.lifes();
      }
      
      this.mascara = temp.join(""); 


      contador = this.palabra.length
      for (let i=0; i<temp.length; i++) { 
        if(this.palabra.charAt(i) == temp[i]) { 
           contador--;       
          }
      }
      console.log(contador);
      if(contador == 0) {   
        this.gameOver();
      }    

  }
  
  reiniciarJuego() {
    this.etapaOut.emit(1);
  }

  lifes() {
      this.vidaImagen = this.URL_IMAGENES_PRE+this.vidas+this.URL_IMAGENES_EXT;    
      if(this.vidas==0){
        this.gameOver();
      }    
  }
  gameOver() {
  
   this.juegoterminado = true;
   if(this.vidas==0){ 
    this.mascara = this.palabra;
    this.mensaje = "Perdiste!!." 
  } else {
    this.mensaje = "Ganaste!!" 
  }
 }
}
