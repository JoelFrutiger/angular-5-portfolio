import { Component, OnInit } from '@angular/core';
import { CvService } from '../../cv.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  displayedColumns = [];
  dataSource = []

  constructor(public cvService:CvService) { 
    this.displayedColumns = ['position', 'name'];
    this.dataSource = this.cvService.getWorkExp();

  }

  ngOnInit() {
  }

}
