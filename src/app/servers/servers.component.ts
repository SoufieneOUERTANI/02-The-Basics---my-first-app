import { Component } from '@angular/core';

@Component({
  selector: '.app-servers',
  // template: 
  // `<app-server></app-server>
  // <h1>Template dans le classe TypeScript</h1>
  // <app-server></app-server>`
  // ,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName='testServer';
  serverCreated = false;
  constructor(){
    setTimeout(() => this.allowNewServer=true, 2000);
  }

  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus = 'Server was created ! Name is '+this.serverName;
  }

  onUpdateServerName(eventParameter :Event){
    this.serverName=(<HTMLInputElement>eventParameter.target).value
  }
}
