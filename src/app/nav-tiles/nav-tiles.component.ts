import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav-tiles',
  templateUrl: './nav-tiles.component.html',
  styleUrls: ['./nav-tiles.component.css'],
animations: [
    trigger('hoverState', [
      state('inactive', style({
        zIndex:"0",
        boxShadow: "none",
        transform: 'scale(1)'
      })),
      state('active',   style({
        zIndex:"1",
        boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", 
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class NavTilesComponent implements OnInit {

  tiles = [
    { text: 'One', cols: 3, rows: 1, color: '#000000', tileHovered:false },
    { text: 'Two', cols: 1, rows: 2, color: '#FFFFFF',tileHovered:false,isImage:false, imgPath:"assets/images/joel-frutiger-min.png" },
    { text: 'Three', cols: 1, rows: 1, color: '#076645',tileHovered:false },
    { text: 'Four', cols: 2, rows: 1, color: '#373B3A', tileHovered:false },
    { text: 'Five', cols: 2, rows: 1, color: '#08734E', tileHovered:false },
  ];

  constructor() { }

  ngOnInit() {
  }

}
