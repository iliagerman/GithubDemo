import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {User} from "../../models/user";
import {GithubUsersProvider} from "../../providers/github-users/github-users";

/**
 * Generated class for the UserDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  public login: string;
  public user: User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _github: GithubUsersProvider) {
    this.login = navParams.get('login');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
    this._github.loadDetails(this.login).subscribe(res => this.user = res);


  }

}
