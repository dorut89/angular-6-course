import {Component, OnDestroy} from '@angular/core';
import {User} from '../model/user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: 'user-administration.component.html',
  styleUrls: ['user-administration.component.scss']
})
export class UserAdministrationComponent implements OnDestroy {

  userListSubscription: Subscription;
  userUpdateSubscription: Subscription;
  userList: Array<User>;

  constructor(private userService: UserService) {
    this.userListSubscription = this.userService.getAllUsers()
      .subscribe(value => {
        this.userList = value;
      });
  }

  userChanged(user: User) {
    this.userListSubscription.unsubscribe();
    if (this.userUpdateSubscription) {
      this.userUpdateSubscription.unsubscribe();
    }
    this.userUpdateSubscription = this.userService.updateUser(user)
      .subscribe(value => {
        this.userListSubscription = this.userService.getAllUsers().subscribe(allUsers => {
          this.userList = allUsers;
        });
      });
  }

  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
    this.userUpdateSubscription.unsubscribe();
  }


}


