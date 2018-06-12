import { Component, OnInit } from '@angular/core';
import { DataProjectService } from '../../../shared/services/data-project.service';

@Component({
    selector: 'ns-sprint-tasks',
    moduleId: __filename,
    templateUrl: './sprint-tasks.component.html',
    styleUrls: ['./sprint-tasks.component.css']
})

export class SprintTasksComponent implements OnInit {
    constructor(
        private dataProjectService: DataProjectService
    ) { 

    }

    ngOnInit(): void {
        
    }
}