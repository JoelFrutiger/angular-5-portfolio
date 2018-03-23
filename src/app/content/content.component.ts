import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: ''
})
export class ContentComponent  {

  constructor(public state = 'out') { }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }



}
