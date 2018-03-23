
import { Type } from '@angular/core';

export class Tile {

  constructor(public text, public cols,public rows, public color,public tileHovered,public isImage = false, public imgPath = "") { }

}