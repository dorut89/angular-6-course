import {Component} from '@angular/core';
import {UserAuthenticationService} from '../user-authentication.service';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {

  constructor(private userAUthSer: UserAuthenticationService) {

  }
  setActive() {
    this.userAUthSer.setActive(true);
  }

}
