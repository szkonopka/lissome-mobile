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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProjectComponent,
  ],
  exports: [
    ProjectComponent,
  ],
  providers: [
    ProjectService,
    SprintService,
    TaskService,
    RoleService,
    TaskAssigneesService
  ]
})

export class ProjectModule { }
