import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Program } from '../models/program';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private API_URL = environment.baseUrl;
  private programsUrl = '/workflowlevel1/';

  constructor(private http: HttpClient) { }

  /** GET programs from the server */
  getPrograms(): Observable<Program[]> {
    const url = `${this.API_URL}${this.programsUrl}`;

    return this.http.get<Program[]>(url);
  }

}
