import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  matchCredentials(userCred): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(userCred.username + ':' + userCred.password)
      })
    };
    return this.http.get('http://localhost:3000/login', httpOptions);
  }
}

