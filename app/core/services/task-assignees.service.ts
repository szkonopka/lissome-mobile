import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { TaskAssignee } from '../../shared/models/task-assignee';
import { Http, Response } from '@angular/http';
import { Configuration } from '../../config/app.config';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';

@Injectable()
export class TaskAssigneesService extends ResourceService<TaskAssignee> {

  constructor(http: Http) { 
    super(
      "taskassignee",
      new Configuration(),
      http,
      new TaskAssigneeSerializer()
    )
  }

  public getAssigneesForTask(taskID: number) : Observable<TaskAssignee[]> {
    return this.http.get(`${this.configuration.ServerUrl}/${this.endpoint}/task/${taskID}`)
    .map((response: Response) => this.convertData(response.json()));
  }
}

export class TaskAssigneeSerializer {
  fromJson(json: any) : TaskAssignee {
    const taskAssignee = new TaskAssignee();

    taskAssignee.Id = json.id;
    taskAssignee.Task = json.task;
    taskAssignee.Assignee = json.assignee;

    return taskAssignee;
  }

  toJson(taskAssignee: TaskAssignee) : any {
    return {
      id: taskAssignee.Id,
      task: taskAssignee.Task,
      assignee: taskAssignee.Assignee
    }
  }
}