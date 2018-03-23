import { Injectable } from '@angular/core';
import { ContactComponent } from './content/contact/contact.component';
import { Content } from './content/content';
import { Tile } from './nav-tiles/tile';

@Injectable()
export class ContentService {
  getContent() {
    return [
      new Content(ContactComponent, 'Contact',
        new Tile('Contact', 3, 1, '#000000', false)),
      new Content(ContactComponent, 'Contact',
        new Tile('Projects', 1, 2, '#FFFFFF', false, false, "assets/images/joel-frutiger-min.png")),
      new Content(ContactComponent, 'Contact',
        new Tile('Three', 1, 1, '#076645', false)),
      new Content(ContactComponent, 'Contact',
        new Tile('Four', 2, 1, '#373B3A', false)),
      new Content(ContactComponent, 'Contact',
        new Tile('Five', 2, 1, '#08734E', false))
    ];
  }

}
