
import { Component } from "@angular/core";

@Component ({
    selector: 'app-list',
    templateUrl : './list.component.html',
    styleUrls : ['./list.component.css']
})
export class ListComponent {
    btnShow = false;
    showSecret = false;
    constructor (){
        setTimeout(() => {
            this.btnShow = true;
        }, 2000);
    }
    onCreateButton(){
     this.showSecret = true; // or !this.showSecret
    }
}
