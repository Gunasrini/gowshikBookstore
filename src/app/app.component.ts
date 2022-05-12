import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookstore-app';

  constructor(public _auth: AuthService) { }


  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyATZihxE7kPq_ZulHJg-sW2YBlQ4flpM8s'
    };
    firebase.initializeApp(firebaseConfig);
  }

  logout() {
    this._auth.LogOut();
  }

}
