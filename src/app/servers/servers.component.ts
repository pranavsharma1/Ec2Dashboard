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
  sortBy:string = "";
  currentPage:number = 1;
  desc:boolean = false;
  constructor(private rest:ServersService, private dashserve:DashStatusService) { }

  ngOnInit() {
    this.getServers();
    this.dashStatus = true;
    this.dashserve.statusUpdated.emit(this.dashStatus);

  }

  setVal(val) {
    this.entriesInPage = val;
    this.getServers();
  }

  onSearch() {
    this.getServers();
  };

  onSort(value) {
    if (value === this.sortBy && !this.desc) {
      this.desc = true;
    } else {
      this.desc = false;
    }
    this.sortBy = value;
    this.getServers();
  };

  loadPage(page) {
    this.currentPage = page;
    this.getServers();
  }

  loadLastPage() {
    this.currentPage = this.pages[this.pages.length - 1];
    this.getServers();
  }

  getServers() {
    this.servers = [];
    this.rest.getResults(this.currentPage, this.entriesInPage, this.inputSearch, this.sortBy, this.desc).subscribe((data: {}) => {
      this.servers = data['results'];
      const numberOfPages = Math.ceil(parseInt(data['size']) / this.entriesInPage);
      this.pages = [];
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    })
  }
}
