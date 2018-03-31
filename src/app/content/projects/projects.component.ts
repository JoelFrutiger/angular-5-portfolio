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

  projects: Project[];
  tags: Tag[] = [];
  selectedTags: Tag[] = [];
  filterActive = false;

  constructor(public projectService: ProjectService) {
    this.projects = this.projectService.getProjects()
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
        }
      })
    })
  }

  toggleTag(tag: Tag) {
    tag.selected = !tag.selected;
    tag.selected ? this.selectedTags.push(tag) : this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    this.selectedTags.length > 0 ? this.filterActive = true : this.filterActive = false;
    console.log("selectedTags", this.selectedTags);
    console.log("filter", this.filterActive);
  }

  hasTag(project: Project) {
    if(!this.filterActive){
      return true;
    }
    project.tags.forEach(tag => {
      if (this.selectedTags.includes(tag)) {
        console.log("Project true: ",project.name,"Tag:",tag.name);
        return true;
      }
    })
    console.log("Project false: ",project.name);
    return false;
  }




  ngOnInit() {
  }

}
