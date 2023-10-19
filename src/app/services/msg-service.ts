import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDoc, getDocs, onSnapshot, orderBy, query, updateDoc }
  from '@angular/fire/firestore';

import { Observable, Observer } from 'rxjs';
import { msg } from '../models/msg';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  private msgRef = collection(this.firestore, 'msg');

  constructor(private firestore: Firestore) { }

  private mensajes: msg[] = [];
  private unsubscribeChat: any;

  
  getMensajes(): Observable<msg[]> {
    return Observable.create((observer: Observer<msg[]>) => {
      const mensajesOrdenados = query(this.msgRef, orderBy('date', 'asc'));

      this.unsubscribeChat = onSnapshot(mensajesOrdenados, (snapshot) => {
        const mensajes = snapshot.docs.map((doc) => doc.data() as msg);
        observer.next(mensajes);
      });
    });
  }

  closeMsg() {
    this.unsubscribeChat();
  }


  savMsg(id: string, email:string,contenido: string) {

    const date = new Date();
    addDoc(this.msgRef, <msg>{
      date: date.toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',   
        hour: 'numeric',
        minute: 'numeric',
        second: '2-digit',
        fractionalSecondDigits: 2
        
      }),
      hour:date.toLocaleTimeString('es-AR',{
        hour: 'numeric',
        minute: 'numeric',
        second: '2-digit',
        fractionalSecondDigits: 2
      }),
      id: id,
      contenido: contenido,
      usr:email
    });
  }

}
