import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';
import { ProjectRole } from '../models/project-role';

@Pipe({
  name: 'taskAssigneeFilter',
  pure: false
})
export class TaskAssigneePipe implements PipeTransform {

  transform(projectRoles: ProjectRole[], task: Task): any {
    return projectRoles.filter((el) => {
      for(let user of task.Users) {
        if(el.UserID === user.Id)
        {
          return;
        }
      }
      return el;
    });
  }

}
