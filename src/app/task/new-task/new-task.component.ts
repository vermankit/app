import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel : EventEmitter<void> = new EventEmitter();
  @Output() add : EventEmitter<NewTask> = new EventEmitter();
  title: string = '';
  summary: string = '';
  date: string = '';
  onCancelClick = () => {
    this.cancel.emit();
  }

  onSubmitClick = () => {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.date
    })
  }
}
