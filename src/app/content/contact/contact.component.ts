import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  displayedColumns = [];
  dataSource = []

  constructor(public contactService:ContactService) { 
    this.displayedColumns = ['position', 'name'];
    this.dataSource = this.contactService.getContactInfo();

  }

  ngOnInit() {
  }

}
