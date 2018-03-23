import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule, MatGridListModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';
import { ContactComponent } from './content/contact/contact.component';
import { ContentService } from './content.service';
import { ProjectsComponent } from './content/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTilesComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatGridListModule,MatCardModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
