import {Component, OnDestroy} from '@angular/core';
import {User} from '../model/user.model';
import {Observable, Subscription} from 'rxjs';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: 'user-administration.component.html',
  styleUrls: ['user-administration.component.scss']
})
export class UserAdministrationComponent implements OnDestroy {

  userListSubscription: Subscription;
  userList: Array<User>;

  constructor(private userService: UserService) {
    this.userListSubscription = this.userService.getAllUsers().subscribe(value => {
      this.userList = value;
    });
  }

  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }


}


