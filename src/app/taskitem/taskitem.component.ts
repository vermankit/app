import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Task } from './taskttem.model';


@Component({
  selector: 'app-taskitem',
  standalone: true,
  imports: [],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.css'
})

export class TaskitemComponent {
 @Input({required: true}) taskItem!: Task;
 @Output() complete : EventEmitter<string> = new EventEmitter();

 onCompleteClick = () => {
   this.complete.emit(this.taskItem.id);
 }


}
