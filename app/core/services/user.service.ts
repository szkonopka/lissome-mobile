import { Injectable } from '@angular/core';
import { Configuration } from '../../config/app.config';
import { User } from '../../shared/models/user';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';

@Injectable()
export class UserService extends ResourceService<User> {

  constructor(http: Http) 
  {
    super(
      "user",
      new Configuration(),
      http,
      new UserSerializer()
    );
  }

  public create(user: User) : Observable<User> {
    alert(`${this.configuration.ServerUrl}/${this.endpoint}/register`);
    return this.http.post(`${this.configuration.ServerUrl}/${this.endpoint}/register`, user)
    .map((response: Response) => this.serializer.fromJson(response.json()) as User);
  }

  public getUsersForTask(taskID: number) : Observable<User[]>{
    return this.http.get(`${this.configuration.ServerUrl}/taskassignee/task/${taskID}/users`)
    .map((response: Response) => this.convertData(response.json()));
  }

  public getUserByName(username: string) : Observable<User> {
    return this.http.get(`${this.configuration.ServerUrl}/${this.endpoint}/byname/${username}`)
    .map((response: Response) => this.serializer.fromJson(response.json()) as User);
  }
}

export class UserSerializer {
  fromJson(json: any) : User {
    const user = new User;
    user.Id = json.id;
    user.Name = json.name;
    user.Email = json.email;
    user.Surname = json.surname;
    user.Username =json.username;

    return user;
  }

  toJson(user: User) : any {
    return {
      id: user.Id,
      email: user.Email,
      name: user.Name,
      surname: user.Surname,
      username: user.Username
    };
  }
}
