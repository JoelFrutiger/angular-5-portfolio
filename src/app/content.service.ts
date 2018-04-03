import { Injectable } from '@angular/core';
import { ContactComponent } from './content/contact/contact.component';
import { Content } from './content/content';
import { Tile } from './nav-tiles/tile';
import { ProjectsComponent } from './content/projects/projects.component';
import { WorkComponent } from './content/work/work.component';
import { AboutMeComponent } from './content/about-me/about-me.component';

@Injectable()
export class ContentService {
  getContent() {
    return [
      new Content(ProjectsComponent, 'Projects', "/projects", "view_list",
        new Tile('Projects', 3, 1, 'white', false)),
      new Content(ContactComponent, 'Contact', "/contact", "",
        new Tile('Image', 1, 3, 'transparent', false, true, "assets/images/joel-frutiger-min-2.png", false)),
      new Content(ContactComponent, 'Contact', "/contact", "mail_outline",
        new Tile('Contact', 1, 1, '#076645', false)),
      new Content(AboutMeComponent, 'About me', '/aboutMe', "person_pin",
        new Tile('About me', 2, 1, '#373B3A', false)),
      new Content(WorkComponent, 'Work Experience', "/work", "description",
        new Tile('CV', 3, 1, '#08734E', false))
    ];
  }

}
