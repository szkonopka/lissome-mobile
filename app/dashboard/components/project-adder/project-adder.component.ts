import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'ns-project-adder',
    templateUrl: './project-adder.component.html',
    moduleId: __filename,
    styleUrls: ['./project-adder.component.css']
})

export class ProjectAdderComponent implements OnInit {

    model: any = {};

    constructor() {}

    ngOnInit() {

    }
}