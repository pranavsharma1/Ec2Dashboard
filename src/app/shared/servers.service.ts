import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServersService {

  constructor(private http: HttpClient) { }

  /**
   * Gets the results from the backend server based on query params
   * @param pageNumber The page on which the view is
   * @param entries number of entries per page
   * @param searchTerm search term entered by user
   * @param sortTerm the sorting header selected by user
   * @param desc if sort is needed in descending order
   * @returns {Observable<Object>}
   */
  getResults(pageNumber, entries, searchTerm, sortTerm, desc):Observable<any> {
    return this.http.get('http://localhost:3000'+'/api/instances?pageno=' + pageNumber +
      '&&itemsinpage=' + entries +
      '&&search='+ searchTerm +
      '&&sortBy='+sortTerm +
        '&&desc=' + desc.toString()
    );
  }
}
