import {Component} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss']
})
export class UserCardComponent {

  userName = 'User name';
  userEmail = 'email@email.com';
  userDescription = 'default description sadaskjd lsakjd lakjdla sjkdlasjdlk asjldjasl jdlask default description sadaskjd lsakjd lakjdla sjkdlasjdlk asjldjasl jdlaskdefault description sadaskjd lsakjd lakjdla' +
    ' sjkdlasjdlk asjldjasl jdlask default description sadaskjd lsakjd lakjdla sjkdlasjdlk asjldjasl jdlask';

  edit(): void {
    console.log('EDIT');
  }

  remove(): void {
    console.log('REMOVE');
  }

}

