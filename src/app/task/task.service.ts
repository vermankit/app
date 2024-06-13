import { dummyTasks } from "../dummy-task";
import { NewTask } from "./new-task/new-task.model";
import { Task } from "./taskitem/taskttem.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks: Task[] = dummyTasks;
    
    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }
    getUserTasks(userId: string): Task[] {
       return this.tasks.filter( task => task.userId === userId)
    }

    addTask(task: NewTask,userId:string): void {
        this.tasks.unshift({
            id: "id" + Math.random().toString(16).slice(2),
            userId: userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.date
          });
          this.saveTasks();
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter( task => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}