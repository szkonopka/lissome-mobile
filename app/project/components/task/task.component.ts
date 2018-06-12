import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../../../shared/models/task";
import { DataProjectService } from "../../../shared/services/data-project.service";

@Component({
    selector: "ns-task",
    moduleId: __filename,
    templateUrl: "task.component.html",
    styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
    @Input() task: Task;

    constructor(
        private dataProjectService: DataProjectService
    ) { }

    ngOnInit(): void {

    }

    removeFromSprint(task: Task) {
        this.dataProjectService.updateTaskSprint(task.Id, null);
    }

    assignToSprint(task: Task) {
        this.dataProjectService.updateTaskSprint(task.Id, this.dataProjectService.selectedProject.ActiveSprint);
    }
    
 }
