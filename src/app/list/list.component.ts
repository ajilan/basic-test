
import { Component } from "@angular/core";

@Component ({
    selector: 'app-list',
    templateUrl : './list.component.html',
    styleUrls : ['./list.component.css']
})
export class ListComponent {
    showSecret = '';
    constructor (){
        
    }
    onCreateButton(){
     this.showSecret = 'Secret password = tuna';
    }
}
