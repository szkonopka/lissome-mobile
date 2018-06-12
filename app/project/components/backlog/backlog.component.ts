import { Component, OnInit } from "@angular/core";
import { DataProjectService } from "../../../shared/services/data-project.service";

@Component({
    selector: "ns-backlog",
    moduleId: __filename,
    templateUrl: "backlog.component.html",
    styleUrls: ['./backlog.component.css']
})

export class BacklogComponent implements OnInit {
    
    constructor(
        private dataProjectService: DataProjectService
    ) { }

    ngOnInit(): void {
        
    }

 }
