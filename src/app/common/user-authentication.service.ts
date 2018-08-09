import {Injectable} from '@angular/core';

@Injectable()
export class UserAuthenticationService {

  private isActive: boolean = false;

  setActive(active: boolean) {
    this.isActive = active;
  }

  getActive(): boolean {
    return this.isActive;
  }

}
