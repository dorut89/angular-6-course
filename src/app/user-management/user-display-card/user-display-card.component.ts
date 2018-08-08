import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-display-card.component.html',
  styleUrls: ['user-display-card.component.scss']
})
export class UserDisplayCardComponent {

  editState = false;

  @Input()
  user: User;

  @Output()
  userChanged: EventEmitter<User> = new EventEmitter();

  save(): void {
    this.editState = false;
    this.userChanged.emit(this.user);
  }
}

