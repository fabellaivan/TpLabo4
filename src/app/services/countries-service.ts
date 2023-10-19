import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  traerUnPais(nombre:string)
  {
    return this.http.get('https://restcountries.com/v2/name/'+nombre);
  }

  traerPaises()
  {
    return this.http.get('https://restcountries.com/v2/alpha?codes=AR,CO,BR,ES,CL');
  }

}
