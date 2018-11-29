import {Component, OnInit} from '@angular/core';
import {ServersService} from "../shared/servers.service";
import {DashStatusService} from "../shared/dash-status.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers:any = [];
  pages:any=[];
  entriesInPage:number = 5;
  dashStatus:boolean  = false;
  inputSearch:string = "";
  currentPage:number = 1;
  constructor(private rest:ServersService, private dashserve:DashStatusService) { }

  ngOnInit() {

    this.getServers();
    this.dashStatus = true;
    this.dashserve.statusUpdated.emit(this.dashStatus);

  }

  onSearch() {

    this.rest.getSearchResults(this.inputSearch).subscribe((data:{})=> {
      this.servers = data['results'];
    })
  };

  onSort(value) {
    this.rest.getSortResults(value).subscribe((data:{})=> {
      this.servers = data['results'];
    })
  };

  loadPage(page) {
    this.currentPage = page;
    this.getServers();
  }

  refreshRows(numberOfItems) {
    this.entriesInPage = numberOfItems;
    this.getServers();
  }

  loadLastPage() {
    this.currentPage = this.pages[this.pages.length - 1];
    this.getServers();
  }

  getServers() {
    this.servers = [];
    this.rest.getServers(this.currentPage, this.entriesInPage).subscribe((data: {}) => {
      this.servers = data['results'];
      const numberOfPages = Math.ceil(parseInt(data['size']) / this.entriesInPage);
      this.pages = [];
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    })
  }
}
