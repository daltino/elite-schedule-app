
import {of as observableOf,  Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';


@Injectable()
export class EliteApi {
  private baseUrl = "https://elite-schedule-app-i2-162c0.firebaseio.com";
  private currentTourney: any = {};
  private tourneyData = {};

  constructor(public http: Http) {
  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res => resolve(res.json()));
    });
  }

  getTournamentData(tourneyId, forceRefresh: boolean = false): Observable<any> {
    if(!forceRefresh && this.tourneyData[tourneyId]) {
      this.currentTourney = this.tourneyData[tourneyId];
      console.log('**no need to make HTTP call, just return the data');
      return observableOf(this.currentTourney);
    }
    // don't have data yet
    console.log('**about to make HTTP call');
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`).pipe(
      map(response => {
        this.tourneyData[tourneyId] = response.json();
        this.currentTourney = this.tourneyData[tourneyId];
        return this.currentTourney;
      }));
  }

  refreshCurrentTourney() {
    return this.getTournamentData(this.currentTourney.tournament.id, true);
  }

  getCurrentTourney() {
    return this.currentTourney;
  }
}
