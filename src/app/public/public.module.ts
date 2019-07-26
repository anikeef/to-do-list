import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsListComponent } from './projects-list/projects-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    ProjectsListComponent,
    TopBarComponent,
    ProjectComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ProjectsListComponent },
      { path: 'projects/:projectId', component: ProjectComponent }
    ])
  ],
  exports: [
    TopBarComponent
  ]
})
export class PublicModule { }
