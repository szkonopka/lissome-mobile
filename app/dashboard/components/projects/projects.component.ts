import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataProjectService } from "../../../shared/services/data-project.service";
import { DataUserService } from "../../../shared/services/data-user.service";
import { ProjectService } from "../../../core/services/project.service";

@Component({
    selector: "ns-projects",
    moduleId: __filename,
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {

    constructor( 
        private dataProjectService: DataProjectService,
        private dataUserService: DataUserService
    ) { }

    ngOnInit(): void {
        this.dataProjectService.loadProjects();
    }
}
