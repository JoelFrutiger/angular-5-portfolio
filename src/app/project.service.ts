import { Injectable } from '@angular/core';
import {Tag} from './content/projects/tag';
import {Project} from './content/projects/project';

@Injectable()
export class ProjectService {

  private cSharp = new Tag("C#","/assets/images/tag/cSharp.png")
  private unity = new Tag("Unity","/assets/images/tag/unity.png")
  private angular = new Tag("Angular","/assets/images/tag/angular.png")
  private php = new Tag("PHP","/assets/images/tag/php.png")

  getProjects() {
    return [
      new Project("ToledoVR", "ToledoVR desc",[this.cSharp,this.unity],
      "https://steam.com","/assets/images/project/toledovr.png"),
      new Project("Cryptoreview", "Cryptoreview desc ",[this.angular,this.php],
      "https://cryptreview.com","/assets/images/project/cryptreview.png")
    ];
  }
}

