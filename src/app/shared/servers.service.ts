import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServersService {

  constructor(private http: HttpClient) { }

  getResults(pageNumber, entries, searchTerm, sortTerm, desc):Observable<any> {
    return this.http.get('http://localhost:3000'+'/api/instances?pageno=' + pageNumber +
      '&&itemsinpage=' + entries +
      '&&search='+ searchTerm +
      '&&sortBy='+sortTerm +
        '&&desc=' + desc.toString()
    );
  }
}
