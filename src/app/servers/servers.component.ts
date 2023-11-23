import { Component } from '@angular/core';

@Component({
  // -- select by class
  selector: '.app-servers',
  // selector: '.app-servers.',
  // -- select by attibute
  // selector: '[app-servers]',
  // -- select by element
  // selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer : boolean = false;
  serverCreationStatus : string = "server not created";
  serverName : string = ""; 
  serverInit : string = "";
  serverCreated : boolean = false;

  servers = ['server1, server2']

  constructor(){
    setTimeout(()=> {
      this.allowNewServer= true;
    } , 3000);
  }

  onInitServerName(eventElement : Event){
    this.allowNewServer=(this.serverName)!=""?true:false;
    this.serverInit = (<HTMLInputElement>eventElement.target).value;
  }

  onCreationServer(){
    this.servers.push(this.serverName);
    this.serverName = this.serverInit;
    this.serverInit ="";
    this.serverCreationStatus= "server "+ this.serverName +" is created";
    this.serverCreated = true;
  }

  onUpdateServerName( eventElement : Event){
    this.serverName = (<HTMLInputElement>eventElement.target).value;
  }
}
