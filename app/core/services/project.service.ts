import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Project } from '../../shared/models/project';
import { Observable } from 'rxjs/Observable';
import { ResourceService } from './resource.service';
import { Configuration } from '../../config/app.config';
import { Sprint } from '../../shared/models/sprint';

@Injectable()
export class ProjectService extends ResourceService<Project> {
  model: any = {}

  private apiUrl 
  constructor(http: Http) {
    super(
      'project',
      new Configuration(),
      http,
      new ProjectSerializer()
    );
  }

  public getAllAssignedTo(userID: number) : Observable<Project[]> {
    console.log("Get all assigned to " + userID);
    return this.http.get(`${this.configuration.ServerUrl}/${this.endpoint}/user/${userID}`)
    .map((response: Response) => this.convertData(response.json()));
  }
}

export class ProjectSerializer {
  fromJson(json: any) : Project {
    console.log(json);
    const project: Project = new Project();
    project.Id = json.id;
    project.Name = json.name;
    project.Owner = json.owner;
    project.Description = json.description;
    project.StartDate = json.startDate;
    project.EndDate = json.endDate;
    project.Slug = project.prepareSlug(json.name);
    project.NumberOfSprints = json.numberOfSprints;
    project.ActiveSprint = json.activeSprint;
    return project;
  }

  toJson(project: Project) : any {
    return {
      id: project.Id,
      name: project.Name,
      owner: project.Owner,
      description: project.Description,
      startDate: project.StartDate,
      endDate: project.EndDate,
      numberOfSprints: project.NumberOfSprints,
      activeSprint: project.ActiveSprint
    };
  }
}