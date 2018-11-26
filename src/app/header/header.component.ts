import { Component, OnInit } from '@angular/core';
import {DashStatusService} from "../shared/dash-status.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDashActive:boolean = false;
  constructor(private dashStatus: DashStatusService) {
    this.dashStatus.statusUpdated.subscribe(
      (status:boolean) => {
        this.isDashActive = status;
      }
    );

  }

  ngOnInit() {
  }


}
