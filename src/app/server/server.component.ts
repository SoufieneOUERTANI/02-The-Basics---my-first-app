import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl :  './server.component.html',
    // Using style
    styles: [`
        .online{
            color:white;
        }
    `],
    // Using styleUrls 
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

    serveId :number = 10;
    serverStatus : string = "offline"

    constructor(){
        this.serverStatus=Math.random()>0.5?"online":"offline";
    }

    // message : string = "Game Over"

    getServerStatus (){
        return this.serverStatus;
    }

    getColour() {
        return this.serverStatus=="online"?"green":"red";
    }
}