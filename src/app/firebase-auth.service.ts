import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  redirectResult: Subject<any> = new Subject<any>();

  constructor(
    public angularFireAuth: AngularFireAuth
  ) { }

  getRedirectResult(): Observable<any> {
    return this.redirectResult.asObservable();
  }
  signInWithEmail(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
    
  }
  signUpWithEmail(email: string, password: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);

  }
}
