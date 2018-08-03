import {Component} from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user-creation',
  templateUrl: 'user-administration.component.html',
  styleUrls: ['user-administration.component.scss']
})
export class UserAdministrationComponent {

  user: User = new User({userName: 'User name', userEmail: 'user@email', userDescription: 'Some short description'});

}
