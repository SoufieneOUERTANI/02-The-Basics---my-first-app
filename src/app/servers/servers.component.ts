import { Component } from '@angular/core';

@Component({
  // -- select by class
  selector: '.app-servers',
  // selector: '.app-servers.',
  // -- select by attibute
  // selector: '[app-servers]',
  // -- select by element
  // selector: 'app-servers',
  template: 
  `<app-server></app-server>
  <h1>Template dans le classe TypeScript</h1>
  <app-server></app-server>`
  ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
