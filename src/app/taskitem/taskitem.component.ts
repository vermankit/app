import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-taskitem',
  standalone: true,
  imports: [],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.css'
})
export class TaskitemComponent {
 @Input({required: true}) title!: string;
}
