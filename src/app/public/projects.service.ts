import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [];
  constructor() {}

  createProject(title: string) {
    this.projects.push(new Project(title));
    return this.projects;
  }

  deleteProject(id: number) {
    this.projects.splice(id, 1);
    return this.projects;
  }
}
