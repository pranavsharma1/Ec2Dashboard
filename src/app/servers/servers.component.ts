import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [
    {name:"Test Server 1", id:"a-36334223",type:"t2.large", state:"running", az:"us-east-a",puip:"123.12.13.1",prip:"124.99.122.1"},
    {name:"Test Server 2", id:"b-345345435",type:"t2.large", state:"stopped", az:"us-east-b",puip:"172.12.13.99",prip:"124.99.122.75"},
    {name:"Test Server 3", id:"a-45647212f",type:"t2.large", state:"terminating", az:"us-west-a",puip:"172.12.13.100",prip:"124.99.122.64"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
