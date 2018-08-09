import {Component, OnDestroy} from '@angular/core';
import {User} from '../model/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../service/user.service';
import {UserAuthenticationService} from '../../common/user-authentication.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: 'user-administration.component.html',
  styleUrls: ['user-administration.component.scss']
})
export class UserAdministrationComponent implements OnDestroy {

  userListSubscription: Subscription;
  userList: Array<User>;

  constructor(private userService: UserService, private userAuthenticationService: UserAuthenticationService) {
    this.userListSubscription = this.userService.listOfAllUsersSubject$.subscribe(
      value => {
        console.log(userAuthenticationService.getActive());
        this.userList = value;
      }, error => {
      });
    this.userService.loadInitialData();
  }


  userChanged(user: User) {
    this.userService.updateUser(user);
  }


  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }


}


