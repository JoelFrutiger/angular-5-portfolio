import { Component } from '@angular/core';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: '#000000' },
    { text: 'Two', cols: 1, rows: 2, color: '#FFFFFF',isImage:true, imgPath:"assets/images/joel-frutiger-min.png" },
    { text: 'Three', cols: 1, rows: 1, color: '#076645' },
    { text: 'Four', cols: 2, rows: 1, color: '#373B3A' },
    { text: 'Five', cols: 2, rows: 1, color: '#08734E' },
  ];
}
