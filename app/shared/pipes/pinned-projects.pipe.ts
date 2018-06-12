import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'pinnedProjectsFilter'
})
export class PinnedProjectsPipe implements PipeTransform {

  transform(projects: Project[], pinState: boolean): any {
    return projects.filter(p => p.Pinned == pinState);
  }

}
