import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { Task } from '../../shared/models/task';
import { Configuration } from '../../config/app.config';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TaskService extends ResourceService<Task> {

  constructor(http: Http) {
    super(
      'task',
      new Configuration(),
      http,
      new TaskSerializer()
    );
   }

   public getAllFromSprint(sprintID: number) : Observable<Task[]> {
    return this.http.get(`${this.configuration.ServerUrl}/sprint/${sprintID}/tasks`)
    .map((response: Response) => this.convertData(response.json()));
   }

   public updateState(taskID: number, stateID: number) {
     return this.http.put(`${this.configuration.ServerUrl}/task/update/${taskID}/state/${stateID}`, null)
     .map((response: Response) => this.serializer.fromJson(response) as Task);
   }

   public updateSprint(taskID: number, sprintID: number) {
     return this.http.put(`${this.configuration.ServerUrl}/task/update/${taskID}/sprint/${sprintID}`, null)
     .map((response: Response) => this.serializer.fromJson(response) as Task);
   }
   
   public getSprintless(projectID: number) : Observable<Task[]> {
    return this.http.get(`${this.configuration.ServerUrl}/task/project/${projectID}/none`)
    .map((response: Response) => this.convertData(response.json()));
  }
}

export class TaskSerializer {
  fromJson(json: any) : Task {
    const task: Task = new Task();
    task.Id = json.id;
    task.Name = json.name;
    task.Deadline = json.deadline;
    task.ProductivityPoints = json.productivityPoints;
    task.Description = json.description;
    task.State = json.state;
    task.CreatedBy = json.createdBy;
    task.Sprint = json.sprint;
    task.Project = json.project;
    task.CreatedOn = json.createdOn;
    return task;
  }

  toJson(task: Task) : any {
    return {
      id: task.Id,
      name: task.Name,
      deadline: task.Deadline,
      productivityPoints: task.ProductivityPoints,
      description: task.Description,
      createdBy: task.CreatedBy,
      state: task.State,
      sprint: task.Sprint,
      project: task.Project,
      createdOn: task.CreatedOn
    };
  }
}
