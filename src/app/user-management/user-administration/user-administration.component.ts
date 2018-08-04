import {Component} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user-creation',
  templateUrl: 'user-administration.component.html',
  styleUrls: ['user-administration.component.scss']
})
export class UserAdministrationComponent {

  userList: Array<User> = listOfUsers;

}


export const listOfUsers: Array<User> = [
  new User({userName: 'User name 1 ', userEmail: 'user-1@email', userDescription: 'Short description 1'}),
  new User({userName: 'User name 2 ', userEmail: 'user-2@email', userDescription: 'Short description 2'}),
  new User({userName: 'User name 3 ', userEmail: 'user-3@email', userDescription: 'Short description 3'}),
  new User({userName: 'User name 4 ', userEmail: 'user-4@email', userDescription: 'Short description 4'}),
  new User({userName: 'User name 5 ', userEmail: 'user-4@email', userDescription: 'Short description 5'}),
  new User({userName: 'User name 6 ', userEmail: 'user-4@email', userDescription: 'Short description 6'}),
  new User({userName: 'User name 7 ', userEmail: 'user-4@email', userDescription: 'Short description 7'})
];
