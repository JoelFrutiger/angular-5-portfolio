import { Injectable } from '@angular/core';
import { ContactComponent } from './content/contact/contact.component';
import { Content } from './content/content';
import { Tile } from './nav-tiles/tile';
import { ProjectsComponent } from './content/projects/projects.component';

@Injectable()
export class ContentService {
  getContent() {
    return [
      new Content(ProjectsComponent, 'Projects',"/projects",
        new Tile('Projects', 3, 1, 'white', false)),
      new Content(ContactComponent, 'Contact',"/contact",
        new Tile('Contact', 1, 3, 'transparent', false, true, "assets/images/joel-frutiger-min.png",false)),
      new Content(ContactComponent, 'Contact',"/contact",
        new Tile('Three', 1, 1, '#076645', false)),
      new Content(ContactComponent, 'CV',"cv",
        new Tile('Four', 2, 1, '#373B3A', false)),
      new Content(ContactComponent, 'TODO','/todo',
        new Tile('Five', 3, 1, '#08734E', false))
    ];
  }

}
