import { Type } from '@angular/core';


export class Tag {

  constructor(public name,public imgPath,public selected = false ) { }

  toggleSelected() {
    this.selected = !this.selected;
  }

}