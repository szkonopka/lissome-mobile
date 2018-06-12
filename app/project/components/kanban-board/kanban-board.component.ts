import { Component, OnInit } from "@angular/core";
import { DataTaskService } from "../../../shared/services/data-task.service";
import { DataProjectService } from "../../../shared/services/data-project.service";

@Component({
    selector: 'ns-kanban-board',
    moduleId: __filename,
    templateUrl: './kanban-board.component.html',
    styleUrls: ['./kanban-board.component.css']
})

export class KanbanBoardComponent implements OnInit {

    constructor(
        private dataTaskService: DataTaskService,
        private dataProjectService: DataProjectService
    ) { }

    ngOnInit(): void {

    }
}