import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  editState = false;

  @Input()
  user: User;

  @Output()
  userChanged: EventEmitter<User> = new EventEmitter();


  oldEmail;

  edit(): void {
    this.editState = true;
  }

  save(): void {
    this.editState = false;
    this.userChanged.emit(this.user);
  }

  updateEmail(newEmail: string): void {
    this.user.userEmail = newEmail;
  }

  cancelEdit(): void {
    this.editState = false;
    this.user.userEmail = this.oldEmail;
  }

  remove(): void {
    console.log('REMOVE');
  }

  ngOnInit(): void {
    if (this.user) {
      this.oldEmail = this.user.userEmail;
    }
  }


}

