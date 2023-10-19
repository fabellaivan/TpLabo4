import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartasService {
  api: string = 'https://deckofcardsapi.com/api/deck/';
  constructor(private http: HttpClient) {}

  crearNuevoMazo(): Observable<any> {
    return this.http.get(this.api + '/new/');
    //return this.http.get(`${this.api}/new/`);
  }
  barajarMazo(deckId: string): Observable<any> {
    return this.http.get(this.api + '/' + deckId + '/shuffle/');
  }
  extraerCartas(deckId: string, count: number): Observable<any> {
    return this.http.get(this.api + '/' + deckId + '/draw/?count=' + count);
  }
}
