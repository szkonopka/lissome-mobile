import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { Sprint } from '../../shared/models/sprint';
import { Task } from '../../shared/models/task';
import { Configuration } from '../../config/app.config';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SprintService extends ResourceService<Sprint> {

  constructor(http: Http) { 
    super(
      'sprint',
      new Configuration(),
      http,
      new SprintSerializer()
    );
  }

  public getCurrentSprints(projectID: number) : Observable<Sprint[]> {
    return this.http.get(`${this.configuration.ServerUrl}/project/${projectID}/sprints/current`)
    .map((response: Response) => this.convertData(response.json()));
  }
}

export class SprintSerializer {
  fromJson(json: any): Sprint {
    const sprint: Sprint = new Sprint();
    sprint.Id = json.id;
    sprint.Name = json.name;
    sprint.StartDate = json.startDate;
    sprint.EndDate = json.endDate;
    sprint.Description = json.description;
    sprint.Project = json.project;
    return sprint;
  }

  toJson(sprint: Sprint) : any {
    return {
      id: sprint.Id,
      name: sprint.Name,
      startDate: sprint.StartDate,
      endDate: sprint.EndDate,
      description: sprint.Description,
      project: sprint.Project
    }
  }
}
