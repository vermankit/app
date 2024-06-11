import { Component, Input } from '@angular/core';
import { Task, TaskitemComponent } from '../taskitem/taskitem.component';
import { dummyTasks } from '../dummy-task';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskitemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required: true}) userId!: string;
  @Input({ required: true }) name!: string;
  tasks: Task[] = dummyTasks;

  get selectedTask(): Task[] {
    return this.tasks.filter( task => task.userId === this.userId)
  }
}
