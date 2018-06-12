import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStateService } from '../core/services/task-state.service';
import { FormsModule } from '@angular/forms';
import { TaskAssigneePipe } from './pipes/task-assignee.pipe';
import { TaskStatePipe } from './pipes/task-state.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TaskAssigneePipe,
    TaskStatePipe
  ],
  exports: [
    TaskAssigneePipe,
    TaskStatePipe
  ],
  providers: [
  
  ]
})
export class SharedModule { }
