import { Component, Input } from '@angular/core';
import { TaskitemComponent } from '../taskitem/taskitem.component';
import { dummyTasks } from '../dummy-task';
import { Task } from '../taskitem/taskttem.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskitemComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {  
  @Input({required: true}) userId!: string;
  @Input({ required: true }) name!: string;
  tasks: Task[] = dummyTasks;
  addNewTask:boolean= false;
  get selectedTask(): Task[] {
    return this.tasks.filter( task => task.userId === this.userId)
  }

  onComplete(id: string): void {
    this.tasks = this.tasks.filter( task => task.id !== id);
  }

  onAddClick(): void {
   this.addNewTask = true;
  }

  cancelClick(): void {
    this.addNewTask = false;
  }

  onAdd(newtask:NewTask): void {
   
   this.tasks.unshift({
     id: "id" + Math.random().toString(16).slice(2),
     userId: this.userId,
     title: newtask.title,
     summary: newtask.summary,
     dueDate: newtask.date
   });

   this.addNewTask = false;
  }
}
