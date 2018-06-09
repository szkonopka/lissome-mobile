import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { TaskState } from '../../shared/models/task-state';
import { Http, Response } from '@angular/http';
import { Configuration } from '../../config/app.config';
import { Task } from '../../shared/models/task';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskStateService extends ResourceService<TaskState>{

  constructor(http: Http) { 
    super(
      'taskstate',
      new Configuration(),
      http,
      new TaskStateSerializer()
    )
  }
}

export class TaskStateSerializer {
  fromJson(json: any) : TaskState {
    const taskState: TaskState = new TaskState();
    taskState.Id = json.id;
    taskState.Name = json.name;

    return taskState;
  }

  toJson(taskState: TaskState) : any {
    return {
      id: taskState.Id,
      name: taskState.Name
    }
  }
}
