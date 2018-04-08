
import { Type } from '@angular/core';
import {Tag} from './tag';

export class Project {

  constructor(public name:string,public desc:string,public tags:Tag[] = [], public url:string[]=[],public imgPath:string='' ) { }

}