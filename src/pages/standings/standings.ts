import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';
import * as _ from 'lodash';


@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  public allStandings: any[];
  public divisionFilter = 'division';
  public standings: any[];
  public team: any;
  public tourneyData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = tourneyData.standings;
    // this.allStandings =
    //   _.chain(this.standings)
    //     .groupBy('division')
    //     .toPairs()
    //     .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
    //     .value();
    
    this.filterDivision();

    // console.log('standings', this.standings);
    // console.log('division Standings', this.allStandings);
  }

  getHeader(record, recordIndex, records) {
    if(recordIndex === 0 || record.division !== records[recordIndex - 1].division) {
      return record.division;
    } else {
      return null;
    }
  }

  filterDivision() {
    if (this.divisionFilter === 'all') {
      this.standings = this.allStandings;
    } else {
      this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
    }
  }

}
