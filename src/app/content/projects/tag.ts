import { Type } from '@angular/core';


export class Tag {

  constructor(public name: string, public imgPath: string, public importance: number = 0, public selected: boolean = false) { }

}
