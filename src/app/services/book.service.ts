import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient, public _auth: AuthService) { }

  saveBook(books: any[]): Observable<any> {
    const tkn = this._auth.getToken();
    return this._httpClient.post('https://gowshik-ngapp-default-rtdb.firebaseio.com/data.json?auth=' + tkn, books);
  }

  getBook() {
    const tkn = this._auth.getToken();
    return this._httpClient.get('https://gowshik-ngapp-default-rtdb.firebaseio.com/data.json?auth=' + tkn);
  }
}
