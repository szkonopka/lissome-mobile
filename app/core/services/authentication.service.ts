import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { Http } from '@angular/http';
import { Configuration } from '../../config/app.config';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as appSettings from 'application-settings';

@Injectable()
export class AuthenticationService {

  //temporaryUser: User = new User(0, 'Samzone', 'Szymon', 'Konopka');

  constructor(
    private http: Http,
    private configuration: Configuration,
    private router: Router
  ) { }

  login(username: string, password: string) {
    return this.http.post(this.configuration.ServerUrl + '/user/authenticate', { username: username, password: password })
    .map((response: Response) => {
      let user = response.json();
      console.log(user);
      if(user && user.token) {
        appSettings.setString('currentUser', JSON.stringify(user));
      }
    } );
  }

  ifLoggedIn() {
    if(appSettings.getString('currentUser')) {
      return true;
    }

    return false;
  }

  logout() {
    appSettings.remove('currentUser');
    this.router.navigate(['']);
  }

}
