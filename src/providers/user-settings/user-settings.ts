import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from  '@ionic/storage';
import * as _ from "lodash";

@Injectable()
export class UserSettings {

  constructor(
    private storage: Storage,
    private events: Events) {
    // console.log('Hello UserSettingsProvider Provider');
  }

  favoriteTeam(team, tournamentId, tournamentName) {
    let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
    this.storage.set(team.id.toString(), JSON.stringify(item));
    this.events.publish('favorites:changed');
  }

  unfavoriteTeam(team) {
    this.storage.remove(team.id.toString());
    this.events.publish('favorites:changed');
  }
  
  isFavouriteTeam(teamId: string): Promise<boolean> {
    return this.storage.get(teamId).then(value => value ? true : false);
  }

  getAllFavorites() {
    let results = [];
    this.storage.forEach(data => {
      // console.log('***inside foreach', data);
      results.push(JSON.parse(data));
    });
    return results;
  }

}
