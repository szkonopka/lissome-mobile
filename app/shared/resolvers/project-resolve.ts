import { Route } from "@angular/compiler/src/core";
import { Project } from "../models/project";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProjectService } from "../../core/services/project.service";
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import * as appSettings from 'application-settings';

@Injectable()
export class ProjectResolve implements Resolve<Project> {

    constructor(private projectService: ProjectService) { }

    resolve(route: ActivatedRouteSnapshot, routstate: RouterStateSnapshot) : Observable<Project> {
        return this.projectService.get(this.getUserID(), route.params['id']);
    }

    private getUserID(): number{
        return JSON.parse(appSettings.getString('currentUser')).id;
    }
}
