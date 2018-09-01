import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../services/program.service';
import { Program } from '../models/program';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  programs: Program[] = [];

  constructor(private programService: ProgramService) {
  }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms(): void {
    this.programService.getPrograms()
      .subscribe((programs) => {
        this.programs = programs;
      }
      );
  }
}
