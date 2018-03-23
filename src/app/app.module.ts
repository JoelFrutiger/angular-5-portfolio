import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, MatGridListModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';
import { ContactComponent } from './content/contact/contact.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTilesComponent,
    ContactComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatGridListModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
