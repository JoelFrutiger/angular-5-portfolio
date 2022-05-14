
import { Type } from '@angular/core';
import { SubProject } from './subProject';
import { Tag } from './tag';


export class WorkProject implements SubProject {

  constructor(public desc, public tags: Tag[]) { }

}
