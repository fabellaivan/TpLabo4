import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root',
})
export class UsrAuthService {

  constructor(
    
    private afauth: AngularFireAuth,
    private db: AngularFireDatabase,
    // private firestore : Firestore
  ) {}

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error en login: ', err);
      return null;
    }
  }
  async register({ email, password }: any) {
    try {
      const userCredential = await this.afauth.createUserWithEmailAndPassword(email, password);
      return { success: true, user: userCredential.user };
    } catch (err:any) {
      if (err.code === 'auth/email-already-in-use') {
        return { success: false, error: 'El correo electrónico ya está en uso por otra cuenta.' };
      } else {
        return { success: false, error: 'Se produjo un error al registrar el usuario. Por favor, inténtelo nuevamente más tarde.' };
      }
    }
  }

  async logLogin() {
    const user = await this.afauth.currentUser;
    if (user != null) {
      const email = user.email;
      const date = new Date().toISOString();
      this.db.list(`/logUser`).push({ email, timestamp: date });
    }
  }

  async logOut() {
    try {
      return await this.afauth.signOut();
    } catch (err) {
      console.log('error en login: ', err);
      return null;
    }
  }

  getUserLoggedIn() {
    return this.afauth.authState;
  }
}
