import {Component, OnDestroy} from '@angular/core';
import {User} from '../model/user.model';
import {interval, Subscription} from 'rxjs';
import {UserService} from '../service/user.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-user-creation',
  templateUrl: 'user-administration.component.html',
  styleUrls: ['user-administration.component.scss']
})
export class UserAdministrationComponent implements OnDestroy {

  userListSubscription: Subscription;
  userList: Array<User>;
  counter = 6;
  start = 5;

  errorState: boolean;
  errorMessage: string;

  constructor(private userService: UserService) {
    this.userListSubscription = this.userService.listOfAllUsersSubject$.subscribe(
      value => {
        this.userList = value;
      }, error => {
        this.errorState = true;
        this.errorMessage = error;
      });
    this.loadInitialData();
  }

  private loadInitialData() {
    return interval(1000).pipe(take(6))
      .subscribe(value => {
        this.counter = this.start - value;
        if (value === 5) {
          this.userService.loadInitialData();
        }
      });
  }

  retry() {
    this.loadInitialData();
  }

  userChanged(user: User) {
    this.userService.updateUser(user);
  }


  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }


}


