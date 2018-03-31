import { Type } from '@angular/core';
import { Tile } from '../nav-tiles/tile';

export class Content {

  constructor(public component: Type<any>, public title,public path,public icon,public tile:Tile, public state = 'out') { }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

}
