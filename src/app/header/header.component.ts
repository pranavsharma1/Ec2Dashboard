import { Component, OnInit } from '@angular/core';
import {DashStatusService} from "../shared/dash-status.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDashActive:boolean = false;
  constructor(private dashStatus: DashStatusService,private router:Router) {
    this.dashStatus.statusUpdated.subscribe(
      (status:boolean) => {
        this.isDashActive = status;
      }
    );

  }

  ngOnInit() {
  }

  onLogout(){
    this.router.navigate(['signin']);

  }


}
