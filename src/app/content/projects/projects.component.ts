import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { Tag } from './tag';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  tags: Tag[] = [];
  selectedTags: Tag[] = [];
  filterActive = false;
  workProjects = [];
  displayedColumns = [];
  customComparator(itemA, itemB) {
    return itemA > itemB ? 1 : -1;
  }

  constructor(public projectService: ProjectService) {
    this.projects = this.projectService.getProjects()
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
        }
      })
    })
    this.workProjects = this.projectService.getWorkProjects();
    this.displayedColumns = ['position', 'name'];
  }

  toggleTag(tag: Tag) {
    tag.selected = !tag.selected;
    tag.selected ? this.selectedTags.push(tag) : this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    this.selectedTags.length > 0 ? this.filterActive = true : this.filterActive = false;
    console.log("selectedTags", this.selectedTags);
    console.log("filter", this.filterActive);
  }

  hasTag(project: Project) {
    if (!this.filterActive) {
      return true;
    }
    for (let i = 0; i < project.tags.length; i++) {
      if (this.selectedTags.includes(project.tags[i])) {
        return true;
      }
    }
    return false;
  }




  ngOnInit() {
  }

}
