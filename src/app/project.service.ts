import { Injectable } from '@angular/core';
import {Tag} from './content/projects/tag';
import {Project} from './content/projects/project';

@Injectable()
export class ProjectService {

  getProjects() {
    return [
      new Project("ToledoVR", "ToledoVR desc",[new Tag("C#","/assets/images/tags/cSharp.png")],
      "https://steam.com","/assets/images/toledovr.png"
    )
    ];
  }
}

