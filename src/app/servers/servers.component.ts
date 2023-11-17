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

  constructor(){
    setTimeout(()=> {
      this.allowNewServer= true;
    } , 3000);
  }

  onCreationServer(){
    this.serverCreationStatus= "server created"
  }

}
