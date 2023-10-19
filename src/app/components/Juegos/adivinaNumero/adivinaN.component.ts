import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinaNumero',
  templateUrl: './adivinaN.component.html',
  styleUrls: ['./adivinaN.component.css']
})
export class AdivinaElNumeroComponent {

  numeroAleatorio: number = Math.floor(Math.random() * 100) + 1;
  mensaje: string = '';

  verificarNumero() {
    const numeroIngresado = parseInt((<HTMLInputElement>document.getElementById("numero")).value);

    if (numeroIngresado === this.numeroAleatorio) {
      this.mensaje = '¡Felicidades! ¡Adivinaste el número!';
    } else if (numeroIngresado < this.numeroAleatorio) {
      this.mensaje = 'El número a adivinar es mayor. Intenta de nuevo.';
    } else {
      this.mensaje = 'El número a adivinar es menor. Intenta de nuevo.';
    }
  }
}
