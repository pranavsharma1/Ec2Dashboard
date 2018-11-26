import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable, of} from "rxjs";

import {Response} from "@angular/http";

@Injectable({
  providedIn: 'root'
})

export class ServersService {


  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getServers(): Observable<any> {
    const PORT = 3000;
    return this.http.get('http://localhost:'+ PORT +'/api/instances');
  }

  getSearchResults(searchTerm):Observable<any> {
    const PORT = 3000;
    return this.http.get('http://localhost:'+ PORT +'/api/instances?search='+searchTerm);
  }

  getSortResults(sortTerm):Observable<any> {
    const PORT = 3000;
    return this.http.get('http://localhost:'+ PORT +'/api/instances?sortBy='+sortTerm);
  }


  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
   */

}
