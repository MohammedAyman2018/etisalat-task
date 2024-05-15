import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IStats } from '../../core/interfaces';
import { StatsService } from '../../core/services/stats.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  stats?: IStats;
  isLoading = false;

  constructor(private statsService: StatsService) { }

  get accountsList() {
    return [
      {
        label: 'ACTIVE ACCOUNTS',
        tag: 'success',
        count: this.stats?.active_accounts,
      },
      {
        label: 'SUSPENDED ACCOUNTS',
        tag: 'danger',
        count: this.stats?.suspended_accounts,
      },
      {
        label: 'INACTIVE ACCOUNTS',
        tag: 'secondary',
        count: this.stats?.inactive_accounts,
      },
    ];
  }
  ngOnInit() {
    this.isLoading = true
    this.statsService.getStats().subscribe({
      next: (value) => {
        this.stats = value;
        this.isLoading = false
      },
      error: (error) => {
        console.log(error); this.isLoading = false
      },
    });
  }
}
