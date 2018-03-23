import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends ContentComponent implements OnInit {

  constructor() { super()}

  ngOnInit() {
  }

}
