
import { Type } from '@angular/core';
import { SubProject } from './subProject';
import { Tag } from './tag';
import { WorkProject } from './workProject';

export class Project {

  constructor(public name: string, public desc: string, public tags: Tag[] = [],
    public url: string[] = [], public imgPath: string = '',
    public largeImagePath: string = '', public youtubeUrlPath: string = '',
    public subProjects: Array<SubProject> = []
  ) { }

}
