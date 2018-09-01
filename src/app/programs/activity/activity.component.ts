import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  private activities: Activity[] = [];
  constructor(private activityService: ActivitiesService) { }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms(): void {
    this.activityService.getActivities()
      .subscribe((activities) => {
        this.activities = activities;
      }
      );
  }

}
