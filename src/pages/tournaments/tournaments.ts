import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../my-teams/my-teams';
import { TeamsPage } from '../teams/teams';


@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

  itemTapped() {
    // this.navCtrl.push(MyTeamsPage);
    this.navCtrl.push(TeamsPage);
  }

}
