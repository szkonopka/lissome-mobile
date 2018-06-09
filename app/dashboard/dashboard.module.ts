import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DataProjectService } from '../shared/services/data-project.service';
import { RouterModule } from '@angular/router';
import { DataTaskService } from '../shared/services/data-task.service';
import { TaskService } from '../core/services/task.service';
import { FormsModule } from '@angular/forms';
import { TaskStateService } from '../core/services/task-state.service';
import { DataSprintService } from '../shared/services/data-sprint.service';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoleSerializer, ProjectRoleService } from '../core/services/project-role.service';
import { DataUserService } from '../shared/services/data-user.service';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { ProjectAdderComponent } from './components/project-adder/project-adder.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NativeScriptModule
  ],
  declarations: [
    DashboardComponent,
    ProjectsComponent,
    ProjectAdderComponent
  ],
  exports: [
    
  ],
  providers: [
    DataTaskService,
    TaskService,
    DataProjectService,
    TaskStateService,
    ProjectRoleService,
    DataUserService
  ],
})
export class DashboardModule { }
