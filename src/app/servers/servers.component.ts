import {Component, OnInit, Input} from '@angular/core';
import {ServersService} from "../shared/servers.service";
import {DashStatusService} from "../shared/dash-status.service";



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // api call - > returns list of servers https://localhost:3000/instances
  // servers = result from API call

  servers:any = [];
  dashStatus:boolean  = false;
  inputSearch:string = "";
  sortSelected:string;
  constructor(private rest:ServersService, private dashserve:DashStatusService) { }

  ngOnInit() {

    this.getServers();
    this.dashStatus = true;
    this.dashserve.statusUpdated.emit(this.dashStatus);

    /*
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    let obs = this.http.get('http://localhost:3000/api/instances');
    obs.subscribe((response)=> console.log(response));
    */
  }

  onSearch() {
    this.rest.getSearchResults(this.inputSearch).subscribe((data:{})=> {
      this.servers = data;
    })
  };

  onSort(value) {
    this.rest.getSortResults(value).subscribe((data:{})=> {
      this.servers = data;
    })
  };

  getServers(){
    this.servers = [];
    this.rest.getServers().subscribe((data:{})=>{
      this.servers = data;
    })
  }




}
