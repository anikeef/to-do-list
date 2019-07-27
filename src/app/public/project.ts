import { Task } from './task';

export class Project {
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
