import { Component, OnInit } from "@angular/core";
import { DataProjectService } from "../../../shared/services/data-project.service";

@Component({
    selector: "ns-participants",
    moduleId: __filename,
    templateUrl: "./participants.component.html",
    styleUrls: ["./participants.component.css"]
})

export class ParticipantsComponent implements OnInit {
    constructor(
        private dataProjectService: DataProjectService
    ) {

    }
    ngOnInit(): void {

    }
}