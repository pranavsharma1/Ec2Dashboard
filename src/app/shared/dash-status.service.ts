import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashStatusService {

  statusUpdated = new EventEmitter<boolean>();
  constructor() { }


}
