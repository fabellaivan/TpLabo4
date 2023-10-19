import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  arreglo : string[] = [];
  constructor(private HttpCLient: HttpClient) { }

  leerPalabras(){

    this.HttpCLient.get('https://loginutn-dc890-default-rtdb.firebaseio.com/datos.json').subscribe(
      arregloPalabras=>{
        this.arreglo=Object.values(arregloPalabras);
      });
  }
  
  guardarPalabra(palabra: string){
    
    this.arreglo.push(palabra);
    this.HttpCLient.put('https://loginutn-dc890-default-rtdb.firebaseio.com/datos.json', this.arreglo).subscribe
    (
      {
        next: (v) => console.log(v),
        error: (e) => console.log(e),
        complete: () => console.info('complete')
      }
    );
  }
}
