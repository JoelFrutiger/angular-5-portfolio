import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './content/contact/contact.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { WorkComponent } from './content/work/work.component';
import { AboutMeComponent } from './content/about-me/about-me.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {
}
