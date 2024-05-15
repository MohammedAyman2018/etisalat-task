import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStats } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor() { }

  getStats() {
    // Creating an observable that emits the random accounts object
    return new Observable<IStats>(subscriber => {
      setTimeout(() => {
        const accounts = this.generateRandomAccounts();
        subscriber.next(accounts);
        subscriber.complete();
      }, 3000)

    });
  }

  // Function to generate the random accounts object
  generateRandomAccounts() {
    return ({
      total_accounts: Math.floor(Math.random() * 500) + 1,
      active_accounts: Math.floor(Math.random() * 500) + 1,
      suspended_accounts: Math.floor(Math.random() * 500) + 1,
      inactive_accounts: Math.floor(Math.random() * 500) + 1
    });
  }
}
