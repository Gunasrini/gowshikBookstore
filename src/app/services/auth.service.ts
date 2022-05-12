import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentToken: any;

  constructor(public route: Router) { }

  RegisterUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  LoginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.getToken();
        this.route.navigate(['/books']);
        // console.log(res);
      }
      )
      .catch(err => console.log(err));
  }

  getToken() {
    firebase.auth().currentUser?.getIdToken()
      .then((token: string) => {
        this.currentToken = token
      })
    return this.currentToken;
  }

  LogOut() {
    firebase.auth().signOut();
    this.route.navigate(["/login"]);
    this.currentToken = null;
  }

  isAuthenticated() {
    return this.currentToken != null ? true : false;
  }

}
