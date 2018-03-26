import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { Tag } from './tag';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : Project[];
  tags : Tag[] = [];

  constructor(public projectService:ProjectService) {
    this.projects = this.projectService.getProjects()
    this.projects.forEach(project =>{
      project.tags.forEach(tag =>{
        if(!this.tags.includes(tag)){
          this.tags.push(tag);
        }
      })
    })
   }

  ngOnInit() {
  }

}
