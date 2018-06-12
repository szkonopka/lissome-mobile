import { Component, OnInit, ViewChild, ElementRef, NgZone } from "@angular/core";
import { Project } from "../shared/models/project";
import { ActivatedRoute, Router } from "@angular/router";
import { DataProjectService } from "../shared/services/data-project.service";
import { ScrollView } from "ui/scroll-view";
import { StackLayout } from "ui/layouts/stack-layout";
import { Button } from "ui/button";

@Component({
    selector: 'ns-project',
    templateUrl: './project.component.html',
    moduleId: __filename,
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    project: Project;
    activeSubpage: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataProjectService: DataProjectService,
        private zone: NgZone
    ) { }

    ngOnInit(): void {
        this.route.data.map(data => { this.dataProjectService.selectedProject = data.project; })
        .subscribe(res => {
            this.dataProjectService.reloadProjectData();
        });
    }
}