import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl :  './server.component.html',
    styles : [
          ` .online{
            color:blue;

        }`
    ]
    ,
    styleUrls : ['./server.component.css']
})
export class ServerComponent{

    serverId : number = 10;
    serverName : string = "premier serveur";
    serverFunction : string = "Fonction du seuveur";
    serverStatus : string = "";

    getTheServerFunction(){
        return this.serverFunction;
    }

    constructor(){
        this.serverStatus=(Math.random()>0.5)?"online":"offline";
    }

    getserverColour() : string{
        return (this.serverStatus=="online")?"green":"red";
    }
}