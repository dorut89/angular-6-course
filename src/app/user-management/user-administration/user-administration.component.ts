import {Component} from '@angular/core';
import {User} from '../model/user.model';
import {UserRepository} from '../service/user.repository';

@Component({
  selector: 'app-user-creation',
  templateUrl: 'user-administration.component.html',
  styleUrls: ['user-administration.component.scss']
})
export class UserAdministrationComponent {

  userList: Array<User> = UserRepository.listOfUsers;

  userEmailChanged(user: User, newEmail: string) {
    user.userEmail = newEmail;
  }

}


