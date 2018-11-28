import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import {Observable} from "rxjs";
import {Headers} from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isAuthenticated:boolean = false;

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

