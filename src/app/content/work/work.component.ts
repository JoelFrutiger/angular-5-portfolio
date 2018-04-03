import { Component, OnInit } from '@angular/core';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  displayedColumns = [];
  dataSourceWork = []
  dataSourceEdu = []

  constructor(public cvService:CvService) { 
    this.displayedColumns = ['dates','place','desc'];
    this.dataSourceWork = this.cvService.getWorkExp();
    this.dataSourceEdu = this.cvService.getEduExp();

  }

  ngOnInit() {
  }

}
