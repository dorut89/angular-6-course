import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss']
})
export class UserCardComponent {

  editState = false;

  @Input()
  userName = 'User name';

  @Input()
  userEmail = 'email@email.com';
  oldEmail = this.userEmail;

  @Input()
  userDescription = 'default description sadaskjd lsakjd lakjdla sjkdlasjdlk asjldjasl jdlask default description sadaskjd lsakjd lakjdla sjkdlasjdlk asjldjasl jdlaskdefault description sadaskjd lsakjd lakjdla' +
    ' sjkdlasjdlk asjldjasl jdlask default description sadaskjd lsakjd lakjdla sjkdlasjdlk asjldjasl jdlask';

  edit(): void {
    this.editState = true;
  }

  save(): void {
    this.editState = false;
  }

  updateEmail(newEmail: string): void {
    this.userEmail = newEmail;
  }

  cancelEdit(): void {
    this.editState = false;
    this.userEmail = this.oldEmail;
  }

  remove(): void {
    console.log('REMOVE');
  }


}

