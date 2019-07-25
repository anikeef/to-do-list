import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project;
  newTaskForm;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(params => {
      this.project = this.projectsService.projects[+params.get('projectId')];
    });
    this.newTaskForm = this.formBuilder.group({
      name: ""
    });
    console.log(this.newTaskForm);
  }

  ngOnInit() {
  }

  createTask(name: string) {
    if (name) this.project.createTask(name);
    this.newTaskForm.reset();
  }
}
