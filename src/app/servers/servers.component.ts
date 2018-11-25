import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {HttpHeaders} from "@angular/common/http";
import {ServersService} from "../shared/servers.service";


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // api call - > returns list of servers https://localhost:3000/instances
  // servers = result from API call

  servers:any = [];


  constructor(private rest:ServersService) { }

  ngOnInit() {

    this.getServers();

    /*
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    let obs = this.http.get('http://localhost:3000/api/instances');
    obs.subscribe((response)=> console.log(response));
    */
  }

  getServers(){
    this.servers = [];
    this.rest.getServers().subscribe((data:{})=>{
      this.servers = data;
    })
  }


}
