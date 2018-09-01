import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  private API_URL = environment.baseUrl;
  private activitisUrl = '/workflowlevel2/';

  constructor(private http: HttpClient) { }

  /** GET activities from the server */
  getActivities(): Observable<Activity[]> {
    const url = `${this.API_URL}${this.activitisUrl}`;

    return this.http.get<Activity[]>(url);
  }
}
