import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";
import {GithubUsersProvider} from "../../providers/github-users/github-users";
import {UserDetailsPage} from "../user-details/user-details";

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public users: User[];
  private _originalUsers: User[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public github: GithubUsersProvider) {
  }

  ionViewDidLoad() {
    this.github.load().subscribe(res => {
      this.users = res;
      this._originalUsers = this.users;
    });


  }

  public goToUserDetailsPage(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  public search(searchEvent) {
    let term = searchEvent.target.value;

    if (term.trim() === '' || term.length < 3) {
      this.users = this._originalUsers;
      return;
    }
    this.github
      .searchUsers(term).subscribe(res => {
      this.users = res;
    });
  }

}
