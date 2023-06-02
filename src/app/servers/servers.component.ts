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

  constructor(){
    setTimeout(() => this.allowNewServer=true, 2000);
  }

}
