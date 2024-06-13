import { Component, Input, inject } from '@angular/core';
import { TaskitemComponent } from './taskitem/taskitem.component';
import { dummyTasks } from '../dummy-task';
import { Task } from './taskitem/taskttem.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';
import { TaskService } from './task.service';


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

  constructor(private taskService: TaskService){}

  addNewTask:boolean= false;
  get selectedTask(): Task[] {
    return this.taskService.getUserTasks(this.userId);
  }  

  onAddClick(): void {
   this.addNewTask = true;
  }

  cancelClick(): void {
    this.addNewTask = false;
  }
 
}
