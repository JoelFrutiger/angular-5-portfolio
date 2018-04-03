import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatExpansionModule, MatButtonModule, MatTableModule, MatTabsModule, MatMenuModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';
import { ContactComponent } from './content/contact/contact.component';
import { ContentService } from './content.service';
import { ProjectsComponent } from './content/projects/projects.component';
import { TitleComponent } from './title/title.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectService } from './project.service';
import { WorkComponent } from './content/work/work.component';
import { ContactService } from './contact.service';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from './content/about-me/about-me.component';
import { CvService } from './cv.service';
import { AboutService } from './about.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
    
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavTilesComponent,
    ContactComponent,
    ProjectsComponent,
    TitleComponent,
    WorkComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [ContentService, ProjectService, ContactService, CvService, AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
