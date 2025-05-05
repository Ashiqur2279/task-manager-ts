import { Task } from "../models/task_model";

let tasks: Task[] = [];

export function addTask(task: Task): void {
  tasks.push(task);
}

export function viewTasks(): Task[] {
  return tasks;
}
