import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl :  './server.component.html'
})
export class ServerComponent{

    serveId :number = 10;
    serverStatus : string = "offline"

    message : string = "Game Over"

    getServerStatus (){
        return this.message;
    }

}