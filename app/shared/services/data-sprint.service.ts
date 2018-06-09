import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../../core/services/project.service';
import { ISubscription } from 'rxjs/Subscription';
import { Sprint } from '../models/sprint';
import { SprintService } from '../../core/services/sprint.service';

@Injectable()
export class DataSprintService {
  public sprints: Sprint[] = [];
  public projects: Project[] = [];
  public subscription: ISubscription;

  constructor(
    private projectService: ProjectService,
    private sprintService: SprintService,
    //private dataProjectService: DataProjectService
  ) {
    
   }

  setProgress(sprint: Sprint) {
    let styles;
    if(sprint !== undefined) {
      styles = {
        'width': sprint.Progress + '%'
      };
    }
    return styles;
  }
  
  delete(sprintID: number) {
    if(confirm("Are you sure?")) {
      //this.sprintService.delete(sprintID).subscribe(data => { this.dataProjectService.reloadProjectData() })
    }
  }
}
