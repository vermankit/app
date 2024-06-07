import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent,UserComponent,CommonModule,TaskComponent]   
})
export class AppComponent {
  title = 'app';
  users = DUMMY_USERS;
  id? : string = ''; 

  get selectedUserName(){
   return  DUMMY_USERS.find( user => user.id === this.id);
  }

  onSelectUser(id: string){   
    this.id = id;  
  }
}
