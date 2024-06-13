import { Component,EventEmitter,Input, Output, inject } from '@angular/core';
import { Task } from './taskttem.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';


@Component({
    selector: 'app-taskitem',
    standalone: true,
    templateUrl: './taskitem.component.html',
    styleUrl: './taskitem.component.css',
    imports: [CardComponent,DatePipe]
})

export class TaskitemComponent {
 @Input({required: true}) taskItem!: Task;
 private taskService = inject(TaskService)
 onCompleteClick = () => {
   this.taskService.removeTask(this.taskItem.id);
 }
}
