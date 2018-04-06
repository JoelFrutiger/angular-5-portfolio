import { Injectable } from '@angular/core';
import { Tag } from './content/projects/tag';
import { Project } from './content/projects/project';

@Injectable()
export class ProjectService {

  private cSharp = new Tag("C#", "/assets/images/tag/cSharp.png");
  private unity = new Tag("Unity", "/assets/images/tag/unity.png");
  private angular = new Tag("Angular", "/assets/images/tag/angular.png");
  private php = new Tag("PHP", "/assets/images/tag/php.png");
  private android = new Tag("Android", "/assets/images/tag/android.png");
  private java = new Tag("Java", "/assets/images/tag/java.png");
  private nodejs = new Tag("NodeJs", "/assets/images/tag/nodejs.png");
  private couchbase = new Tag("Couchbase", "/assets/images/tag/couchbase.png");
  private wordpress = new Tag("Wordpress", "/assets/images/tag/wordpress.png");
  private ios = new Tag("iOS", "/assets/images/tag/ios.png");
  private swift = new Tag("Swift", "/assets/images/tag/swift.png");
  private python = new Tag("Python", "/assets/images/tag/python.png");
  private powershell = new Tag("Powershell", "/assets/images/tag/powershell.png");
  private c = new Tag("C", "/assets/images/tag/c.png");
  private bash = new Tag("Bash", "/assets/images/tag/bash.png");
  private ts = new Tag("Typescript","/assets/images/tag/ts.png")
  private js = new Tag("Javascript","/assets/images/tag/js.png")
  private mysql = new Tag("MySQL","/assets/images/tag/mysql.png")


  getProjects() {
    return [
      new Project("ToledoVR", "ToledoVR desc", [this.cSharp, this.unity],
        "https://steam.com", "/assets/images/project/toledovr.png"),
      new Project("Cryptocurrency review", "Cryptoreview desc ", [this.angular, this.php,this.js,this.ts,this.mysql],
        "https://cryptreview.com", "/assets/images/project/cryptreview.png"),
      new Project("Manage goals", "Desc", [this.android, this.java, this.nodejs, this.couchbase,this.js,this.mysql],
        "https://somedudes.ch/2016/07/01/manage-goals/", "/assets/images/project/manageGoals.png"),
      new Project("Kitchen pad", "Desc", [this.angular],
        "https://devpost.com/software/kitchen-pad", "/assets/images/project/kitchenpad.png"),
      new Project("Portfolio","Desc",[this.angular,this.ts]),
      new Project("Various school/work proj.", "Desc", [this.java,this.angular,this.android,this.ios,this.swift,this.php,this.c,this.powershell,this.python,this.bash, this.js,this.mysql],
        "https://github.com/JoelFrutiger", "/assets/images/project/various.png"),
      new Project("Various websites", "Desc", [this.wordpress,this.mysql],
        "https://somedudes.ch/2016/07/01/manage-goals/", "/assets/images/project/various.png"),
    ];

  }
}

