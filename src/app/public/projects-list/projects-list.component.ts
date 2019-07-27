import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects = [];
  newProjectForm;

  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService
  ) {
    this.projects = this.projectsService.projects;
    this.newProjectForm = this.formBuilder.group({
      title: ""
    })
  }

  ngOnInit() {
  }

  createProject(title) {
    if (title) this.projects = this.projectsService.createProject(title);
    this.newProjectForm.reset();
  }

  deleteProject(id: number) {
    this.projects = this.projectsService.deleteProject(id);
  }
}
