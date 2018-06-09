import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../../core/services/task.service';
import { Subscription } from 'rxjs/Subscription';
import { TaskState } from '../models/task-state';
import { TaskStateService } from '../../core/services/task-state.service';

@Injectable()
export class DataTaskService {
  public tasks: Task[] = [];
  private subscription: Subscription;
  public taskStates: TaskState[] = [];
  public currentTaskToEdit: Task = new Task();

  constructor(
    private taskService: TaskService,
    private taskStateService: TaskStateService,
  ) { }

  public setCurrentTaskToEdit(task: Task) {
    this.currentTaskToEdit = task;
  }

  public loadTasks() {
    this.subscription = this.taskService.getAll(this.getUserID()).subscribe((tasks => { this.tasks = tasks } ));
  }

  public loadTaskStates() {
    this.taskStateService.getAll(null).subscribe(taskStates => { this.taskStates = taskStates});
  }

  public deleteTask(taskID: number) {
    return this.taskService.delete(taskID).toPromise();
  }

  public destroy() {
    this.subscription.unsubscribe();
  }

  public showTaskEditor(task: Task) {
    this.setCurrentTaskToEdit(task);
    const sprintAdder = document.querySelectorAll('.task-editor')[0];
    const sprintAdderWindow = document.querySelectorAll('.task-editor__window')[0];
    sprintAdder.classList.add('task-editor_active');
    sprintAdderWindow.classList.add('task-editor__window_active');
  }

  private getUserID(): number {
    let id: number = JSON.parse(localStorage.getItem('currentUser')).id;
    return id;
  }
}
