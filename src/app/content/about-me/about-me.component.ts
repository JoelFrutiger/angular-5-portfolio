import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../about.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  dataSourceInt = []
  dataSourceLan = []
  displayedColumns = []

  constructor(public aboutService:AboutService) { 
    this.displayedColumns = ['name', 'desc'];
    this.dataSourceLan = this.aboutService.getLang();
    this.dataSourceLan = this.aboutService.getInterests();

  }

  ngOnInit() {
  }

}
