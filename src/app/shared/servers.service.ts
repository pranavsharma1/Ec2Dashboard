import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServersService {

  constructor(private http: HttpClient) { }


  getServers(pageNumber, entries): Observable<any> {
    const PORT = 3000;
    return this.http.get('http://localhost:'+ PORT +'/api/instances?pageno=' + pageNumber + '&&itemsinpage=' + entries);
  }

  getSearchResults(searchTerm):Observable<any> {
    const PORT = 3000;
    return this.http.get('http://localhost:'+ PORT +'/api/instances?search='+searchTerm);
  }

  getSortResults(sortTerm):Observable<any> {
    const PORT = 3000;
    return this.http.get('http://localhost:'+ PORT +'/api/instances?sortBy='+sortTerm);
  }


}
