import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable()
export class GithubUsersProvider {


  private _githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubUsersProvider Provider');
  }

  public load(): Observable<User[]> {
    return this.http.get(`${this._githubApiUrl}/users`).map(res => <User[]>res.json());
  }

  public loadDetails(login): Observable<User> {
    return this.http.get(`${this._githubApiUrl}/users/${login}`).map(res => <User>res.json())
  }

  public searchUsers(searchParams: string): Observable<User[]> {
    return this.http.get(`${this._githubApiUrl}/search/users?q=${searchParams}`).map(res => <User[]>res.json().items);
  }

}
