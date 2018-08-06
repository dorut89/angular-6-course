import {Observable, pipe, Subject, Subscription} from 'rxjs';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

  hostUrl = 'http://localhost:8080/user';

  listOfAllUsers: Array<User> = [];

  private listOfAllUsersSubject: Subject<Array<User>> = new Subject();
  public listOfAllUsersSubject$ = this.listOfAllUsersSubject.asObservable();

  constructor(private httpClient: HttpClient) {

  }

  public loadInitialData(): void {
    this.getAllUsers()
      .subscribe(value => {
        this.listOfAllUsers = value;
        this.listOfAllUsersSubject.next(this.listOfAllUsers);
      }, error => {
        this.listOfAllUsersSubject.error('Could not retrieve list of users');
      });
  }

  public getAllUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.hostUrl).pipe(map(value => {
      const updatedArray: Array<User> = [];
      value.forEach(item => {
        console.log(item);
        updatedArray.push(new User(item));
      });
      return updatedArray;
    }));
  }

  public updateUser(user: User) {
    const requestBody: string = JSON.stringify(user);
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.put<User>(this.hostUrl, requestBody, {headers: httpHeaders})
      .subscribe(pipe(source => {
        this.getAllUsers().subscribe(value => {
        }, error1 => {
          this.listOfAllUsersSubject.error('Could not retrieve list of users');
        });
      }));
  }


}
