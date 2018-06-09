import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataProjectService } from "../shared/services/data-project.service";
import * as appSettings from 'application-settings';
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ns-dashboard",
    moduleId: __filename,
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

    constructor( 
        private page: Page
    ) 
    { 
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
       
    }
}
