import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StartupSelectSpotModalComponent} from '../../views/startup-select-spot/startup-select-spot-modal/startup-select-spot-modal.component';
import {LeaveSpotModalComponent} from './leave-spot-modal/leave-spot-modal.component';
import {LogOutModalComponent} from './log-out-modal/log-out-modal.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openLeaveSpotDialog() {
    this.dialog.open(LeaveSpotModalComponent);
  }

  openLogOutDialog() {
    this.dialog.open(LogOutModalComponent);
  }

  ngOnInit(): void {
  }

}
