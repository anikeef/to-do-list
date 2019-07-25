import { Injectable } from '@angular/core';

class Task {
  name: string;
  isDone: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  toggle() {
    this.isDone = this.isDone ? false : true;
  }
}

class Project {
  title: string;
  tasks: Task[] = [];

  constructor(title: string) {
    this.title = title;
  }

  createTask(name: string) {
    this.tasks.push(new Task(name));
  }

  toggleTask(id) {
    this.tasks[id].toggle();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = [];
  constructor() {}

  createProject(title: string) {
    this.projects.push(new Project(title));
    return this.projects;
  }
}
