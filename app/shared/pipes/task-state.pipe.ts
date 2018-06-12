import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'taskStateFilter',
  pure: false
})
export class TaskStatePipe implements PipeTransform {
  transform(tasks: Task[], stateID: number): Task[] {
    return tasks.filter(task => task.State === stateID);
  }
}
