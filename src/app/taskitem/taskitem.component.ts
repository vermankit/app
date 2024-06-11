import { Component,Input } from '@angular/core';

export type Task = {
  id:string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};
@Component({
  selector: 'app-taskitem',
  standalone: true,
  imports: [],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.css'
})
export class TaskitemComponent {
 @Input({required: true}) taskItem!: Task;
}
