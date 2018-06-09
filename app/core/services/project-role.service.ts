import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { ProjectRole } from '../../shared/models/project-role';
import { Http, Response } from '@angular/http';
import { Configuration } from '../../config/app.config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectRoleService extends ResourceService<ProjectRole>{

  constructor(http: Http) {
    super(
      'projectrole',
      new Configuration(),
      http,
      new ProjectRoleSerializer()
    )
   }

   public getAllFromProject(projectID: number) : Observable<ProjectRole[]> {
    return this.http.get(`${this.configuration.ServerUrl}/${this.endpoint}/users/${projectID}`)
    .map((response: Response) => this.convertData(response.json()));
   }
}

export class ProjectRoleSerializer {
  fromJson(json: any) : ProjectRole {
    const projectRole = new ProjectRole();
    projectRole.Id = json.id;
    projectRole.Project = json.project;
    projectRole.Role = json.role;
    projectRole.UserID = json.userID;
    projectRole.IsActive = json.isActive;

    return projectRole;
  }

  toJson(projectRole: ProjectRole) : any {
    return {
      id: projectRole.Id,
      project: projectRole.Project,
      role: projectRole.Role,
      userID: projectRole.UserID,
      isActive: projectRole.IsActive
    }
  }
}
