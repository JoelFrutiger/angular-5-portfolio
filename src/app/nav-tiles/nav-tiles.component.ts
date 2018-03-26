import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';
import { ContentService } from '../content.service';
import { Content } from '../content/content';

@Component({
  selector: 'app-nav-tiles',
  templateUrl: './nav-tiles.component.html',
  styleUrls: ['./nav-tiles.component.css'],
  animations: [
    trigger('hoverState', [
      state('inactive', style({
        zIndex: "0",
        boxShadow: "none",
        transform: 'scale(1)'
      })),
      state('active', style({
        zIndex: "1",
        boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        transform: 'scale(1.18)'
      })),
      transition('inactive => active',
        group([
          animate('200ms ease-in', style({
            zIndex: "1",
            boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
            transform: 'scale(1.2)'
          })),
          animate('20ms 200ms ease-in', style({
            zIndex: "1",
            boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
            transform: 'scale(1.18)'
          }
          ))
        ])
      ),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class NavTilesComponent implements OnInit {


  toggleContent(content: Content) {
    this.contents.forEach(element => {
      element.state = "out";
    });
    content.state = "in";
  }

  contents: Content[];

  constructor(private contentService: ContentService) {
    this.contents = this.contentService.getContent();
  }

  ngOnInit() {
  }

}
