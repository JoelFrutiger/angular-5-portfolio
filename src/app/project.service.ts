import { Injectable } from '@angular/core';
import { Tag } from './content/projects/tag';
import { Project } from './content/projects/project';
import { WorkProject } from './content/projects/workProject';
import { GeneralProject } from './content/projects/generalProject';

@Injectable()
export class ProjectService {

  private cSharp = new Tag("C#", "/assets/images/tag/cSharp.png", -100);
  private unity = new Tag("Unity", "/assets/images/tag/unity.png", -99);
  private angular = new Tag("Angular", "/assets/images/tag/angular.png", -98);
  private php = new Tag("PHP", "/assets/images/tag/php.png", 10);
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
  private ts = new Tag("Typescript", "/assets/images/tag/ts.png");
  private js = new Tag("Javascript", "/assets/images/tag/js.png");
  private mysql = new Tag("MySQL", "/assets/images/tag/mysql.png");
  private jenkins = new Tag("Jenkins", "/assets/images/tag/jenkins.png");
  private dotNet = new Tag(".Net", "/assets/images/tag/NET-Framework-Logo.png");
  private tSql = new Tag("Microsoft SQL", "/assets/images/tag/tsql.png");
  private jQuery = new Tag("jQuery", "/assets/images/tag/jQuery.png");
  private unrealEngine = new Tag("Unreal Engine", "/assets/images/tag/unreal.png");
  private cplusplus = new Tag("C++", "/assets/images/tag/cplusplus.png");
  private darfRiftNetworking = new Tag("DR Networking", "/assets/images/tag/dr.png", 8);

  getProjects() {
    return [
      new Project("3V-ROOMS", "roomsDesc", [this.cSharp, this.dotNet, this.tSql, this.jQuery, this.angular],
        ["https://3v-rooms.ch", "https://www.ffhs.ch/de/raum-mieten#/search"]),
      new Project("ToledoVR", "toledoDesc", [this.cSharp, this.unity],
        ["https://store.steampowered.com/app/557461/ToledoVR/"], "/assets/images/project/toledovr.png", '', 'https://www.youtube.com/embed/36seVOeBBAU'),
      new Project("Hololens for machine maintenance", "hololensDesc", [this.cSharp, this.unity],
        ["https://bfh.easydocmaker.ch/media/pdf_final/2432_joel-paul_frutiger.pdf"], '', '', 'https://www.youtube.com/embed/DrZ3SKnt4hE'),
      new Project("GreatSiege", "greatSiegeDesc", [this.cSharp, this.unity], [], '', '', 'https://www.youtube.com/embed/Ml0uSAqjbtk'
      ),
      new Project("Stratigos", "stratigosDesc", [this.cSharp, this.unity, this.darfRiftNetworking], [], '', '/assets/images/project/stratigos2.png'
      ),
      new Project("Cryptocurrency review", "cryptoDesc", [this.angular, this.php, this.js, this.ts, this.mysql],
        ["https://cryptreview.com"], "/assets/images/project/ccr.png"),
      new Project("Manage goals", "manageDesc", [this.android, this.java, this.nodejs, this.couchbase, this.js, this.mysql],
        ["https://somedudes.ch/2016/07/01/manage-goals/"], "/assets/images/project/mg.jpg"),
      new Project("Kitchen pad", "kitchenDesc", [this.angular, this.js],
        ["https://devpost.com/software/kitchen-pad"], "/assets/images/project/kitchenpad.png"),
      new Project("Portfolio", "portfolioDesc", [this.angular, this.ts], ["https://github.com/JoelFrutiger/angular-5-portfolio"]),
      new Project("Various Unreal Engine projects", "", [this.cplusplus, this.unrealEngine], null, null, null, null, this.getUnrealProjects()
      ),
      new Project("Various school/work proj.", "", [this.java, this.angular, this.android, this.ios, this.swift, this.php, this.c, this.powershell, this.python, this.bash, this.js, this.mysql, this.jenkins],
        ["https://github.com/JoelFrutiger"], null, null, null, this.getWorkProjects()),
      new Project("Various websites", "variousDesc", [this.wordpress, this.mysql],
        ["https://somedudes.ch", "http://oeko-tec.ch"])
    ];

  }

  getUnrealProjects() {
    return [
      new GeneralProject("udemyCourseDesc", 'assets/pdfs/udemyCert.pdf'),
      new GeneralProject("bfmeReforgedDesc", 'https://github.com/JoelFrutiger/saruman-project'),
      new GeneralProject("shaderDesc", 'assets/images/project/UnitMarkerOutline.PNG'),
      new GeneralProject("ue5ProjDesc", 'assets/images/project/ue5test.png'),
    ]
  }

  getWorkProjects() {
    return [
      new WorkProject("reportDesc", [this.angular]),
      new WorkProject("appDesc", [this.ios, this.swift]),
      new WorkProject("cpuDesc", [this.c]),
      new WorkProject("xelhaDesc", [this.java]),
      new WorkProject("vaadinDesc", [this.java]),
      new WorkProject("testautoDesc", [this.python]),
      new WorkProject("webmasterDesc", [this.bash, this.mysql]),
      new WorkProject("accautoDesc", [this.powershell]),
      new WorkProject("buildDesc", [this.jenkins])
    ]
  }
}

