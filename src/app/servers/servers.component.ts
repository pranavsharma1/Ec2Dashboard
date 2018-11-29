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

  /**
   * Calls the service to get display results based on the value selected by the user
   * @param val A value to change the filtering the number of records disaplyed
   */
  setVal(val) {
    this.currentPage = 1;
    this.entriesInPage = val;
    this.getServers();
  }

  /**
   * Calls the service to get search results
   */
  onSearch() {
    this.getServers();
  };

  /**
   * Calls the service to get the sort results based on the attribute selected
   * @param value takes the attribute to sort
   */
  onSort(value) {
    if (value === this.sortBy && !this.desc) {
      this.desc = true;
    } else {
      this.desc = false;
    }
    this.sortBy = value;
    this.getServers();
  };

  /**
   *Gets the results for the selected page on pagination
   * @param page takes the page number as the input
   */
  loadPage(page) {
    this.currentPage = page;
    this.getServers();
  }

  /**
   * Gets the results for the last page of the pagination
   */
  loadLastPage() {
    this.currentPage = this.pages[this.pages.length - 1];
    this.getServers();
  }

  /**
   * Calls the service to get the results based on paramters
   */
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
