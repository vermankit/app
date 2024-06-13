import { Component, EventEmitter, Output, inject,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId! : string;
  @Output() cancel : EventEmitter<void> = new EventEmitter(); 
  title: string = '';
  summary: string = '';
  date: string = '';
  private taskService = inject(TaskService);


  onCancelClick = () => {
    this.cancel.emit();
  }

  onSubmitClick = () => {
    this.taskService.addTask({
      title: this.title,
      summary: this.summary,
      date: this.date
    },this.userId)
  }
}
