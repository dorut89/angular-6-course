import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

  hostUrl = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) {

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

  public updateUser(user: User): Observable<User> {
    const requestBody: string = JSON.stringify(user);
    const httpHeaders: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<User>(this.hostUrl, requestBody, {headers: httpHeaders});
  }


}
