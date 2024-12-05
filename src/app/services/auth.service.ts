import { inject, Injectable } from '@angular/core';
import { auth, googleProvider } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

register(email: string, password: string){
  createUserWithEmailAndPassword(auth, email, password)
}

login(email: string, password: string){
  signInWithEmailAndPassword(auth, email, password)
}

signInWithGoogle(){
  return signInWithPopup(auth, googleProvider)
}

}
