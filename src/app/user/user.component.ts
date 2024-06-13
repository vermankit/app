import { Component, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.model';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {  
  @Input({required:true}) user! : User;
  @Input({required:true}) selected! : boolean;
  @Output() select = new EventEmitter();
  get imagePath() { 
    return 'assets/users/' + this.user.avatar;
  }

  onClickUser() {
     this.select.emit(this.user.id);
  }
}
