import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, ActivityComponent]
})
export class ProgramsModule { }
