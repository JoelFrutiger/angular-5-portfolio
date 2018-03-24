import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations: [
    trigger('flyIn', [
      state('in', style({ width: "600px", transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ width: "0px", transform: 'translateX(30px)', opacity: 0 }),
        group([
          animate('0.8s 0.3s ease', style({
            transform: 'translateX(0)',
            width: "600px"
          })),
          animate('1.5s ease', style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
