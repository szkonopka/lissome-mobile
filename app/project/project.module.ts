import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../core/services/project.service';
import { SprintService } from '../core/services/sprint.service';
import { TaskService } from '../core/services/task.service';
import { SharedModule } from '../shared/shared.module';
import { RoleService } from '../core/services/role.service';
import { TaskAssigneesService } from '../core/services/task-assignees.service';
import { ProjectResolve } from '../shared/resolvers/project-resolve';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptCommonModule } from'nativescript-angular/common';
import { BacklogComponent } from './components/backlog/backlog.component';
import { TaskComponent } from './components/task/task.component';
import { SprintTasksComponent } from './components/sprint-tasks/sprint-tasks.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NativeScriptModule,
    NativeScriptCommonModule
  ],
  declarations: [
    ProjectComponent,
    BacklogComponent,
    TaskComponent,
    SprintTasksComponent,
    KanbanBoardComponent
  ],
  exports: [
    ProjectComponent,
  ],
  providers: [
    ProjectService,
    SprintService,
    TaskService,
    RoleService,
    TaskAssigneesService,
    ProjectResolve
  ]
})

export class ProjectModule { }
