import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { ProjectService } from '../../core/services/project.service';
import { ISubscription } from 'rxjs/Subscription';
import { Sprint } from '../models/sprint';
import { SprintService } from '../../core/services/sprint.service';
import { TaskService } from '../../core/services/task.service';
import { TaskStateService } from '../../core/services/task-state.service';
import { DataTaskService } from './data-task.service';
import { ProjectRoleService } from '../../core/services/project-role.service';
import { ProjectRole } from '../models/project-role';
import { User } from '../models/user';
import { UserService } from '../../core/services/user.service';
import { Role } from '../models/Role';
import { RoleService } from '../../core/services/role.service';
import { TaskAssigneesService } from '../../core/services/task-assignees.service';
import * as appSettings from 'application-settings';

@Injectable()
export class DataProjectService {
  public projects: Project[] = [];
  public selectedProject: Project = new Project();
  public projectActiveSprint: Sprint = null;
  public subscription: ISubscription;
  public projectSubscription: ISubscription;
  public sprintlessTasks: Task[] = [];
  public projectRoles: ProjectRole[] = [];
  public projectUsers: User[] = [];
  public roles: Role[] = [];
 
  constructor(
    private projectService: ProjectService,
    private sprintService: SprintService,
    private taskService: TaskService,
    private taskStateService: TaskStateService,
    private dataTaskService: DataTaskService,
    private projectRoleService: ProjectRoleService,
    private userService: UserService,
    private roleService: RoleService,
    private taskAssigneService: TaskAssigneesService
  ) {

  }

  public reloadProjectData() {
    this.loadProjectData();
    this.loadSprintlessTasks(this.selectedProject);
    this.loadActiveSprint();
    this.loadActiveSprintTasks();
    this.loadRoles();
    this.loadUsers();
  }

  public reloadProjectTasksStates() {
    this.loadSprintlessTasks(this.selectedProject);
    this.loadActiveSprintTasks();
  }

  public updateTaskState(taskID: number, stateID: number) {
    this.taskService.updateState(taskID, stateID).subscribe((data => { this.reloadProjectTasksStates(); }));
  }

  public updateTaskSprint(taskID: number, sprintID: number) {
    this.taskService.updateSprint(taskID, sprintID).subscribe((data => { this.reloadProjectTasksStates(); }));
  }

  public loadProjectData() {
    this.taskStateService.getAll(null).subscribe( taskStates => { 
      this.dataTaskService.taskStates = taskStates;
    })
  }

  public loadRoles() {
    this.roleService.getAll(null).subscribe((data) => { 
      this.roles = data;
    });
  }

  public loadSprintlessTasks(project: Project) {
    this.taskService.getSprintless(project.Id).subscribe( tasks => {
      project.SprintlessTasks = tasks;
      for(let task of project.SprintlessTasks) {
        this.userService.getUsersForTask(task.Id).subscribe( users => {
          task.Users = users;
        });
      }
    })
  }

  public loadActiveSprint() {
    this.sprintService.get(this.selectedProject.Id, this.selectedProject.ActiveSprint).subscribe( sprint => {
      this.selectedProject.ActiveSprintObject = sprint;
    })
  }

  public loadProjects() {
    this.projectService.getAllAssignedTo(this.getUserID()).subscribe(
      projects => { 
        console.log(projects);
        this.projects = projects;
        this.loadSprintFromProject();
      }
    );
  }

  public loadActiveSprintTasks() {
    this.taskService.getAllFromSprint(this.selectedProject.ActiveSprint).subscribe( tasks => {
      this.selectedProject.ActiveSprintObject.ActiveTasks = tasks;
      for(let task of this.selectedProject.ActiveSprintObject.ActiveTasks) {
        this.userService.getUsersForTask(task.Id).subscribe( users => {
          task.Users = users;
        });
      }
    })
  }

  public loadSprintFromProject() {
    this.projects.forEach((project: Project) => {
      this.sprintService.get(project.Id, project.ActiveSprint).subscribe(
        activeSprint => { 
          project.ActiveSprintObject = activeSprint;
          this.loadTasksFromSprintsData(project.ActiveSprintObject);
          this.loadSprintlessTasks(project);
        }
      )
    });
  }

  public loadTasksFromSprintsData(sprint: Sprint) {
    sprint.updateProgres();
    this.taskService.getAllFromSprint(sprint.Id).subscribe(
      activeTasks => { 
        sprint.ActiveTasks = activeTasks;
      }
    );
  }

  public sumSprintPoints(sprint: Sprint) {
    sprint.ActiveTasks.forEach((task: Task) => {
      sprint.SprintPoints += task.ProductivityPoints;
    })
  }

  public deleteProject(id: number) {
    if(confirm("Are you sure?")) {
      this.projectService.delete(id).toPromise().then(response => this.loadProjects());
    }
  }

  public updateProject() {
    this.projectService.update(this.selectedProject).subscribe(res => { });
  }

  public loadUsers() {
    this.projectRoleService.getAllFromProject(this.selectedProject.Id).subscribe(res => { 
      this.projectRoles = res;
      this.projectRoles.forEach(projectRole => {
        this.userService.getOne(projectRole.UserID).subscribe(res => {
          projectRole.User = res;
        });
        this.roleService.getOne(projectRole.Role).subscribe(res => {
          projectRole.RoleObject = res;
        });
      });
    });
  }

  public showSprintAdder() {
    const sprintAdder = document.querySelectorAll('.sprint-adder')[0];
    const sprintAdderWindow = document.querySelectorAll('.sprint-adder__window')[0];
    sprintAdder.classList.add('sprint-adder_active');
    sprintAdderWindow.classList.add('sprint-adder__window_active');
  }

  public getUserID() : number {
    let id: number = JSON.parse(appSettings.getString('currentUser')).id;
    return id;
  }
}
