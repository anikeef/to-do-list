export class Task {
  name: string;
  isDone: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  toggle() {
    this.isDone = this.isDone ? false : true;
  }
}
